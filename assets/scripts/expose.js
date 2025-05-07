window.addEventListener('DOMContentLoaded', init)

function init(){
  console.log("DOM fully loaded");
  const jsConfetti = new JSConfetti();
  const hornSelect = document.getElementById('horn-select');
  const volumeSlider = document.getElementById('volume');
  const volumeImage = document.querySelector('#volume-controls img');
  const soundImage = document.querySelector('#expose img');
  const playButton = document.querySelector('#expose button');
  const audioElement = document.querySelector('audio');

  hornSelect.addEventListener('change', () => {
    const hornType = hornSelect.value;
    console.log(`Selected horn: ${hornType}`);
    
    const imagePath = `./assets/images/${hornType}.svg`;
    const audioPath = `./assets/audio/${hornType}.mp3`;
    
    soundImage.src = imagePath;
    soundImage.alt = `${hornType} image`;
    audioElement.src = audioPath;
  });

  // 2. Volume Slider Handler
  volumeSlider.addEventListener('input', () => {
    const volume = volumeSlider.value;
    console.log(`Volume set to: ${volume}%`);
    
    // Set audio volume (0-1 range)
    audioElement.volume = volume / 100;
    
    // Update volume icon
    let volumeLevel;
    if (volume == 0) {
      volumeLevel = 0;
    } else if (volume < 33) {
      volumeLevel = 1;
    } else if (volume < 67) {
      volumeLevel = 2;
    } else {
      volumeLevel = 3;
    }
    
    volumeImage.src = `./assets/icons/volume-level-${volumeLevel}.svg`;
    volumeImage.alt = `Volume level ${volumeLevel}`;
  });

  playButton.addEventListener('click', () => {
    console.log("Play button clicked");
    
    try {
      audioElement.play();
      if (hornSelect.value === 'party-horn') {
        jsConfetti.addConfetti();
      }
    } catch (error) {
      console.error("Error playing sound:", error);
    }
  });

  hornSelect.value = 'air-horn'; // Set default selection
  hornSelect.dispatchEvent(new Event('change')); // Trigger change handler
  volumeSlider.dispatchEvent(new Event('input')); // Trigger volume handler
};
