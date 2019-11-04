import keysLayout from './keyslayout';
import removeActiveKey from './removeactivekey';
import changeRegister from './changeregister';
import writeKey from './writekey';
import highlightButton from './highlightbutton';

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

  e.preventDefault();
}
export default keydownListener;
