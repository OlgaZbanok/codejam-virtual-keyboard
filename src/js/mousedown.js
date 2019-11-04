import {
  kMaxLength,
} from 'buffer';

function mousedownListener(e) {
  let key = e.target;
  let code = '';
  const area = document.querySelector('.inputarea');


  document.querySelector('.inputarea').focus();
  if (e.target.classList.contains('keyboard__key')) key = e.target;
  else if (e.target.classList.contains('on')) key = e.target.parentNode.parentNode;
  else return false;

  [, code] = key.classList;
  switch (code) {
    case 'ShiftRight':
    case 'ShiftLeft':
      if (!this.shiftDown) this.doShiftDown(key);
      else this.doShiftUp(key);
      break;
    case 'CapsLock':
      this.doCapsLock(key);
      break;
    default:
      this.doWriteSymbol(key);
      if (this.shiftDown) this.doShiftUp(key);
  }

  return true;
}
export default mousedownListener;
