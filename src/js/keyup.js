import showup from './showup';

function keyupListener(e) {
  const ecode = `.${e.code}`;
  const key = document.querySelector(ecode);
  switch (e.code) {
    case 'ShiftRight':
    case 'ShiftLeft':
      this.doShiftUp(key);
      break;
    case 'CapsLock':
      break;
    default:
      showup(key);
  }
  this.pressedKey.delete(e.code);
}
export default keyupListener;
