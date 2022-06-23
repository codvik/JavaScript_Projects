let whiteKeys = document.querySelectorAll('.white-keys');
let blackKeys = document.querySelectorAll('.black-keys');

whiteKeys.forEach((e, i) => {
  e.parentElement.setAttribute('path', 'audio/key-' + (i + 1) + '.mp3');
  e.addEventListener('click', () => {
    let path = e.parentElement.getAttribute('path');
    let audio = new Audio(path);
    audio.play();
  });
});

blackKeys.forEach((e, i) => {
  e.parentElement.setAttribute('path', 'audio/key-' + (i + 14) + '.mp3');
  e.addEventListener('click', () => {
    let path = e.parentElement.getAttribute('path');
    let audio = new Audio(path);
    audio.play();
  });
});
