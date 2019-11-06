import showDown from './showdown';

function keydownListener(e) {
  const ecode = `.${e.code}`;
  const key = document.querySelector(ecode);
  const area = document.querySelector('.inputarea');

  switch (e.code) {
    case 'ShiftRight':
    case 'ShiftLeft':
      this.doShiftDown(key);
      break;
    case 'CapsLock':
      showDown(key);
      this.doCapsLock(key);
      break;

    case 'ArrowLeft':
    case 'ArrowRight':
    case 'ArrowUp':
    case 'ArrowDown':
      this.doMoveCursor(key);
      break;
    default:
      showDown(key);
      this.doWriteSymbol(key);
  }

  this.pressedKey.add(e.code);
  if (this.pressedKey.has('ControlLeft') && this.pressedKey.has('AltLeft')) this.doChangeLanguage();
  e.preventDefault();
}
export default keydownListener;
