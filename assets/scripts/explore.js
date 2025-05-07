// explore.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceDropdown = document.getElementById('voice-select');
  const textInput = document.getElementById('text-to-speak');
  const speakButton = document.querySelector('button');
  const faceImage = document.querySelector('#explore img');

  function loadVoices() {
    const voices = window.speechSynthesis.getVoices();
    voiceDropdown.innerHTML = '<option disabled selected>Select Voice</option>';
    
    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceDropdown.appendChild(option);
    });
  }

  function speak() {
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    
    if (voiceDropdown.value) {
      utterance.voice = window.speechSynthesis.getVoices()[voiceDropdown.value];
    }

    utterance.onstart = () => {
      faceImage.src = 'assets/images/smiling-open.png';
    };

    utterance.onend = utterance.onerror = () => {
      faceImage.src = 'assets/images/smiling.png';
    };

    window.speechSynthesis.speak(utterance);
  }

  loadVoices();
  window.speechSynthesis.onvoiceschanged = loadVoices;
  speakButton.addEventListener('click', speak);
}

window.addEventListener('DOMContentLoaded', init);
