import {
  kMaxLength,
} from 'buffer';
import showUp from './showup';
import showDown from './showdown';

function mousedownListener(e) {
  let key = e.target;
  let code = '';
  const area = document.querySelector('.inputarea');

  if (e.target.classList.contains('keyboard__key')) key = e.target;
  else if (e.target.classList.contains('on')) key = e.target.parentNode.parentNode;
  else return false;

  [, code] = key.classList;
  switch (code) {
    case 'ShiftRight':
    case 'ShiftLeft':
      this.mouseShift = true;
      if (!this.shiftDown) this.doShiftDown(key);
      else this.doShiftUp(key);
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
      showUp(key);
      this.doWriteSymbol(key); if (this.shiftDown) this.doShiftUp(key);
  }

  return true;
}
export default mousedownListener;
