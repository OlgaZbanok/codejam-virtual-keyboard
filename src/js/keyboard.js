import {
  type,
} from 'os';

function createKeyboard() {
  const keysLayout = [
    [
      ['Backquote', 'ё', 'Ё', '`', '~'],
      ['Digit1', '1', '!', '1', '!'],
      ['Digit2', '2', '"', '2', '@'],
      ['Digit3', '3', '№', '3', '#'],
      ['Digit4', '4', ';', '4', '$'],
      ['Digit5', '5', '%', '5', '%'],
      ['Digit6', '6', ':', '6', '^'],
      ['Digit7', '7', '?', '7', '&'],
      ['Digit8', '8', '*', '8', ''],
      ['Digit9', '9', '(', '9', '('],
      ['Digit0', '0', ')', '0', ')'],
      ['Digit-', '-', '-', '-', ''],
      ['Equal=', '=', '+', '=', '+'],
      ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'],
    ],
    [
      ['Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
      ['KeyQ', 'й', 'Й', 'q', 'Q'],
      ['KeyW', 'ц', 'Ц', 'w', 'W'],
      ['KeyE', 'у', 'У', 'e', 'E'],
      ['KeyR', 'к', 'К', 'r', 'R'],
      ['KeyT', 'е', 'Е', 't', 'T'],
      ['KeyY', 'н', 'Н', 'y', 'Y'],
      ['KeyU', 'г', 'Г', 'u', 'U'],
      ['KeyI', 'ш', 'Ш', 'i', 'I'],
      ['KeyO', 'щ', 'Щ', 'o', 'O'],
      ['KeyP', 'з', 'З', 'p', 'P'],
      ['BracketLeft', 'х', 'Х', '[', '{'],
      ['BracketRight', 'ъ', 'Ъ', ']', '}'],
      ['Backslash', '\\', '/', '\\', '|'],
    ],
    [
      ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
      ['KeyA', 'ф', 'Ф', 'a', 'A'],
      ['KeyS', 'ы', 'Ы', 's', 'S'],
      ['KeyD', 'в', 'В', 'd', 'D'],
      ['KeyF', 'а', 'А', 'f', 'F'],
      ['KeyG', 'п', 'П', 'g', 'G'],
      ['KeyH', 'р', 'Р', 'h', 'H'],
      ['KeyJ', 'о', 'О', 'j', 'J'],
      ['KeyK', 'л', 'Л', 'l', 'L'],
      ['Semicolon', 'ж', 'Ж', ';', ':'],
      ['Quote', 'э', 'Э', '\'', '"'],
      ['Enter', 'Enter', 'Enter', 'Enter', 'Enter'],
    ],

    [
      ['ShiftLeft', 'ShiftLeft', 'ShiftLeft', 'ShiftLeft', 'ShiftLeft'],
      ['KeyZ', 'я', 'Я', 'z', 'Z'],
      ['KeyX', 'ч', 'Ч', 'x', 'X'],
      ['KeyC', 'с', 'С', 'c', 'C'],
      ['KeyV', 'м', 'М', 'v', 'V'],
      ['KeyB', 'и', 'И', 'b', 'B'],
      ['KeyN', 'т', 'Т', 'b', 'B'],
      ['KeyM', 'ь', 'Ь', 'm', 'M'],
      ['Comma', 'б', 'Б', ',', '<'],
      ['Period', 'ю', 'Ю', '.', '>'],
      ['Slash', '.', ',', '/', '?'],
      ['ArrowUp', 'ArrowUp', 'ArrowUp', 'ArrowUp', 'ArrowUp'],
      ['ShiftRight', 'ShiftRight', 'ShiftRight', 'ShiftRight', 'ShiftRight'],
    ],
    [
      ['ControlLeft', 'ControlLeft', 'ControlLeft', 'ControlLeft', 'ControlLeft'],
      ['OSLeft', 'OSLeft', 'OSLeft', 'OSLeft', 'OSLeft'],
      ['AltLeft', 'AltLeft', 'AltLeft', 'AltLeft', 'AltLeft'],
      ['Space', 'Space', 'Space', 'Space', 'Space'],
      ['AltRight', 'AltRight', 'AltRight', 'AltRight', 'AltRight'],
      ['ControlRight', 'ControlRight', 'ControlRight', 'ControlRight', 'ControlRight'],
      ['ArrowLeft', 'ArrowLeft', 'ArrowLeft', 'ArrowLeft', 'ArrowLeft'],
      ['ArrowDown', 'ArrowDown', 'ArrowDown', 'ArrowDown', 'ArrowDown'],
      ['ArrowRight', 'ArrowRight', 'ArrowRight', 'ArrowRight', 'ArrowRight'],
    ],
  ];

  const wrap = document.createElement('div');
  wrap.classList.add('wrapper');

  const area = document.createElement('textarea');
  area.classList.add('inputarea');

  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');


  keysLayout.forEach((row) => {
    row.forEach((key) => {
      const keyElement = document.createElement('button');
      keyElement.classList.add('keyboard__key');


      switch (key[0]) {
        case 'Backspace':
          keyElement.classList.add('keyboard__key-wide');
          keyElement.textContent = 'Backspace';
          break;

        case 'CapsLock':
          keyElement.classList.add('keyboard__key-wide');
          keyElement.textContent = 'CapsLock';
          break;

        case 'Enter':
          keyElement.classList.add('keyboard__key-wide');
          keyElement.textContent = 'Enter';
          break;

        case 'Space':
          keyElement.classList.add('keyboard__key-extrawide');
          break;

        case 'ShiftLeft':
          keyElement.classList.add('keyboard__key-wide');
          keyElement.textContent = 'Shift';
          break;
        case 'ShiftRight':
          keyElement.classList.add('keyboard__key-wide');
          keyElement.textContent = 'Shift';
          break;
        case 'ArrowUp':
          keyElement.textContent = 'Up';
          break;
        case 'ArrowDown':
          keyElement.textContent = 'Down';
          break;
        case 'ArrowLeft':
          keyElement.textContent = 'Left';
          break;
        case 'ArrowRight':
          keyElement.textContent = 'Right';
          break;

        case 'OSLeft':
          keyElement.textContent = 'Win';
          break;
        case 'ControlLeft':
          keyElement.textContent = 'Ctrl';
          break;
        case 'ControlRight':
          keyElement.textContent = 'Ctrl';
          break;
        case 'AltLeft':
          keyElement.textContent = 'Alt';
          break;
        case 'AltRight':
          keyElement.textContent = 'Alt';
          break;
        default: {
          const [, , , el] = key;
          keyElement.textContent = el;
        }
      }

      keyboard.append(keyElement);
    });
    keyboard.append(document.createElement('br'));
  });
  document.body.append(wrap);
  wrap.append(area, keyboard);
}

export default createKeyboard;
