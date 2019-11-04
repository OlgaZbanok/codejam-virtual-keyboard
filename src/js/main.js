import createKeyboard from './keyboard';
import mousedownListener from './mousedown';
import keydownListener from './keydown';
import changeRegister from './changeregister';
import keyupListener from './keyup';
import writeKey from './writekey';
import highlightButton from './highlightbutton';

createKeyboard();
const keyboard = document.querySelector('.keyboard');
const area = document.querySelector('.inputarea');
area.addEventListener('keydown', keydownListener.bind(keyboard));
area.addEventListener('keyup', keyupListener.bind(keyboard));
keyboard.addEventListener('mousedown', mousedownListener.bind(keyboard));

keyboard.shiftDown = false;
keyboard.doShiftDown = function (key) {
  if (this.shiftDown) return false;
  this.shiftDown = true;
  changeRegister();
  highlightButton(key);
  return true;
};
keyboard.doShiftUp = function (key) {
  if (!this.shiftDown) return false;
  this.shiftDown = false;
  changeRegister();
  highlightButton(key);
  return true;
};
keyboard.doCapsLock = function (key) {
  changeRegister();
  highlightButton(key);
  return true;
};
keyboard.doWriteSymbol = function (key) {
  writeKey(key, area);
  highlightButton(key);
  return true;
};
