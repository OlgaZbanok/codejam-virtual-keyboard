import {
  type,
} from 'os';
import keymousedownListener from './keymousedown';
import keydownListener from './keydown';
import keysLayout from './keyslayout';

function createKeyboard() {
  const wrap = document.createElement('div');
  wrap.classList.add('wrapper');

  const area = document.createElement('textarea');
  area.classList.add('inputarea');
  area.setAttribute('autofocus', 'autofocus');
  area.addEventListener('keydown', keydownListener);
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');

  keyboard.addEventListener('mousedown', keymousedownListener);
  keysLayout.forEach((row) => {
    row.forEach((key) => {
      const keyElement = document.createElement('button');

      const [code, rusS, rusB, engS, engB] = key;
      keyElement.classList.add('keyboard__key', code);
      switch (key[0]) {
        case 'Backspace':
          keyElement.classList.add('keyboard__key-wide');
          break;

        case 'CapsLock':
          keyElement.classList.add('keyboard__key-wide');
          break;

        case 'Enter':
          keyElement.classList.add('keyboard__key-wide');
          break;

        case 'Space':
          keyElement.classList.add('keyboard__key-extrawide');
          break;

        case 'ShiftLeft':
          keyElement.classList.add('keyboard__key-wide');
          break;

        case 'ShiftRight':
          keyElement.classList.add('keyboard__key-wide');
          break;
        // case 'ArrowUp':
        //   keyElement.textContent = 'Up';
        //   break;
        // case 'ArrowDown':
        //   keyElement.textContent = 'Down';
        //   break;
        // case 'ArrowLeft':
        //   keyElement.textContent = 'Left';
        //   break;
        // case 'ArrowRight':
        //   keyElement.textContent = 'Right';
        //   break;
        // case 'OSLeft':
        //   keyElement.textContent = 'Win';
        //   break;
        // case 'ControlLeft':
        //   keyElement.textContent = 'Ctrl';
        //   break;
        // case 'ControlRight':
        //   keyElement.textContent = 'Ctrl';
        //   break;
        // case 'AltLeft':
        //   keyElement.textContent = 'Alt';
        //   break;
        // case 'AltRight':
        //   keyElement.textContent = 'Alt';
        //   break;
        default: {
          break;
        }
      }

      keyboard.append(keyElement);

      const rus = document.createElement('span');
      rus.classList.add('rus');
      const eng = document.createElement('span');
      eng.classList.add('eng', 'current');
      keyElement.append(rus, eng);

      const russmall = document.createElement('span');
      russmall.classList.add('small', 'on');
      russmall.textContent = rusS;

      const rusbig = document.createElement('span');
      rusbig.classList.add('big');
      rusbig.textContent = rusB;
      rus.append(russmall, rusbig);

      const engsmall = document.createElement('span');
      engsmall.classList.add('small', 'on');
      engsmall.textContent = engS;

      const engbig = document.createElement('span');
      engbig.classList.add('big');
      engbig.textContent = engB;
      eng.append(engsmall, engbig);
    });
    keyboard.append(document.createElement('br'));
  });
  document.body.append(wrap);
  wrap.append(area, keyboard);
}

export default createKeyboard;
