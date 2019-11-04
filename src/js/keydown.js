
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
      this.doCapsLock(key);
      break;
    default:
      this.doWriteSymbol(key);
  }

  this.pressedKey.add(e.code);
  if (this.pressedKey.has('ControlLeft') && this.pressedKey.has('AltLeft')) this.doChangeLanguage();
  e.preventDefault();
}
export default keydownListener;
