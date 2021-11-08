function playAudio(audio) {
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
};

function playAudioWithKeydown(e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  playAudio(audio);
  key.classList.add('playing');
};

function playAudioWithMouseClick(e) {
  const key = e.target.closest('.key');
  const audio = document.querySelector(`audio[data-key="${key.dataset.key}"]`);

  playAudio(audio);
  key.classList.add('playing');
};

function removeTransition(e) {
  if (e.propertyName === 'transform') {
    this.classList.remove('playing');
  }
};

document.addEventListener('click', playAudioWithMouseClick);
document.addEventListener('keydown', playAudioWithKeydown);

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


