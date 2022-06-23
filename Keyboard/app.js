import {
  getKeyName,
  getElementWithKey,
  makeKeyUnjiggle,
  makeRandomKeyJiggle,
  makeKeyRed
} from './utility.js';

document.addEventListener('keydown', (event) => {
  const keyName = getKeyName(event);
  const element = getElementWithKey(keyName);

  if (element.getAttribute('class') === 'key jiggle') {
    makeKeyUnjiggle(element);
    makeRandomKeyJiggle();
  } else {
    makeKeyRed(element);
  }
});

document.addEventListener('keyup', (event) => {
  const keyName = getKeyName(event);
  const element = getElementWithKey(keyName);
  if (element.getAttribute('class') === 'key red') {
    element.setAttribute('class', 'key');
  }
});
