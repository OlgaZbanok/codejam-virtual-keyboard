import createKeyboard from './keyboard';
import mousedownListener from './mousedown';
import keydownListener from './keydown';
import changeRegister from './changeregister';
import keyupListener from './keyup';
import writeKey from './writekey';
import highlightButton from './highlightbutton';
import changeLanguage from './changelanguage';

createKeyboard();
const keyboard = document.querySelector('.keyboard');
const area = document.querySelector('.inputarea');
area.addEventListener('keydown', keydownListener.bind(keyboard));
area.addEventListener('keyup', keyupListener.bind(keyboard));
keyboard.addEventListener('mousedown', mousedownListener.bind(keyboard));

keyboard.shiftDown = false;
keyboard.capsDown = false;
keyboard.pressedKey = new Set();

keyboard.doChangeLanguage = function doChangeLanguage() {
  changeLanguage();
};
keyboard.doShiftDown = function doShiftDown(key) {
  if (this.shiftDown) return false;
  this.shiftDown = true;
  changeRegister();
  highlightButton(key);
  return true;
};
keyboard.doShiftUp = function doShiftUp(key) {
  if (!this.shiftDown) return false;
  this.shiftDown = false;
  changeRegister();
  highlightButton(key);
  return true;
};
keyboard.doCapsLock = function doCapsLock(key) {
  this.capsDown = !this.capsDown;
  changeRegister();
  highlightButton(key);
  return true;
};
keyboard.doWriteSymbol = function doWriteSymbol(key) {
  writeKey(key, area);
  highlightButton(key);
  return true;
};
