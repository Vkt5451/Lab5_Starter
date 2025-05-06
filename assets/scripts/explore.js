// explore.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  console.log('Speech Synthesis Initialization Started');
  
  // DOM elements with null checks
  const voiceSelect = document.getElementById('voice-select');
  const textarea = document.getElementById('text-to-speak');
  const talkButton = document.querySelector('#explore button');
  const faceImage = document.querySelector('#explore img');

  // Verify all elements exist
  if (!voiceSelect || !textarea || !talkButton || !faceImage) {
    console.error('Missing elements:', {
      voiceSelect: !!voiceSelect,
      textarea: !!textarea,
      talkButton: !!talkButton,
      faceImage: !!faceImage
    });
    return;
  }
  // Speech synthesis setup
  const synth = window.speechSynthesis;
  if (!synth) {
    console.error('Speech Synthesis API not available');
    return;
  }
  let voices = [];
  let isSpeaking = false;

  // Load available voices
  function loadVoices() {
    try {
      voices = synth.getVoices();
      console.log('Available voices:', voices);
      
      // Clear and repopulate voice dropdown
      voiceSelect.innerHTML = '';
      const defaultOption = document.createElement('option');
      defaultOption.value = 'select';
      defaultOption.textContent = 'Select Voice:';
      defaultOption.disabled = true;
      defaultOption.selected = true;
      voiceSelect.appendChild(defaultOption);
      
      voices.forEach(voice => {
        const option = document.createElement('option');
        option.value = voice.voiceURI;
        option.textContent = `${voice.name} (${voice.lang})`;
        voiceSelect.appendChild(option);
      });
    } catch (error) {
      console.error('Error loading voices:', error);
    }
  }

  // Voice loading handlers
  synth.onvoiceschanged = loadVoices;
  
  // Initial voice load with fallback
  if (synth.getVoices().length > 0) {
    loadVoices();
  } 

  // Talk button handler
  talkButton.addEventListener('click', () => {
    const text = textarea.value.trim();

    // Get selected voice
    const selectedVoiceURI = voiceSelect.value;
    const selectedVoice = voices.find(voice => voice.voiceURI === selectedVoiceURI);

    try {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = selectedVoice || null;
      
      // Face animation handlers
      utterance.onstart = () => {
        console.log('Speech started');
        isSpeaking = true;
        faceImage.src = 'assets/images/smiling-open.png';
      };

      utterance.onend = () => {
        console.log('Speech ended');
        isSpeaking = false;
        faceImage.src = 'assets/images/smiling.png';
      };

      utterance.onerror = (event) => {
        console.error('Speech error:', event);
        isSpeaking = false;
        faceImage.src = 'assets/images/smiling.png';
      };
      // Speak the text
      synth.speak(utterance);
    } catch (error) {
      console.error('Speech synthesis failed:', error);
      isSpeaking = false;
      faceImage.src = 'assets/images/smiling.png';
    }
  });
}