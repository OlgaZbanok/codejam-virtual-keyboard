
import createKeyboard from './createkeyboard';
import mousedownListener from './mousedown';
import keydownListener from './keydown';
import changeRegister from './changeregister';
import keyupListener from './keyup';
import writeKey from './writekey';
import showDown from './showdown';
import changeLanguage from './changelanguage';
import moveCursor from './movecursor';

createKeyboard();
const keyboard = document.querySelector('.keyboard');
const area = document.querySelector('.inputarea');
area.addEventListener('blur', () => area.focus());
area.addEventListener('keydown', keydownListener.bind(keyboard));
area.addEventListener('keyup', keyupListener.bind(keyboard));
keyboard.addEventListener('mousedown', mousedownListener.bind(keyboard));

keyboard.shiftDown = false;
keyboard.capsDown = false;
keyboard.pressedKey = new Set();
keyboard.mouseShift = false;
keyboard.doChangeLanguage = function doChangeLanguage() {
  changeLanguage();
};
keyboard.doShiftDown = function doShiftDown(key) {
  if (this.shiftDown) return false;
  this.shiftDown = true;
  changeRegister();
  showDown(key);
  return true;
};
keyboard.doShiftUp = function doShiftUp(key, forceShiftToggle = false) {
  if (!this.shiftDown) return false;
  this.shiftDown = false;
  this.mouseShift = false;
  changeRegister();
  showDown(key, forceShiftToggle);
  return true;
};
keyboard.doCapsLock = function doCapsLock(key) {
  this.capsDown = !this.capsDown;
  changeRegister();
  return true;
};
keyboard.doWriteSymbol = function doWriteSymbol(key) {
  writeKey(key, area);
  if (this.mouseShift) {
    this.doShiftUp(key, true);
  }
  return true;
};

keyboard.doMoveCursor = function doMoveCursor(key) {
  moveCursor(key);
};
