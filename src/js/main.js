import createKeyboard from './createkeyboard';
import mousedownListener from './mousedown';
import keydownListener from './keydown';
import changeRegister from './changeregister';
import keyupListener from './keyup';
import writeKey from './writekey';
import showDown from './showdown';
import changeLanguage from './changelanguage';

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
  showDown(key);
  return true;
};
keyboard.doWriteSymbol = function doWriteSymbol(key) {
  writeKey(key, area);
  if (this.mouseShift) {
    this.doShiftUp(key, true);
  }
  return true;
};

keyboard.doArrowLeft = function doArrowLeft() {
  const curPos = area.selectionStart;
  document.getSelection().removeAllRanges();
  if (curPos !== 0) area.setSelectionRange(curPos - 1, curPos - 1);
  area.selectionStart = curPos - 1;
  area.selectionEnd = curPos - 1;
};

keyboard.doArrowRight = function doArrowRight() {
  const curPos = area.selectionStart;
  if (curPos !== area.value.length) area.setSelectionRange(curPos + 1, curPos + 1);
};
keyboard.doArrowUp = function doArrowUp() {
  const curPos = area.selectionStart;
  const mas = area.value.split('\n');
  let offsetX = 0;

  let prevlenght = 0;

  let curcount = 0;
  let move = 0;

  for (let i = 0; i < mas.length; i += 1) {
    const element = mas[i];
    offsetX = 0;
    for (let j = 0; j < element.length; j += 1) {
      offsetX += 1;
      curcount += 1;
      if (i > 0) {
        prevlenght = mas[i - 1].length;

        if (curcount === curPos) {
          if (offsetX > prevlenght) move = curPos - offsetX - 1;
          else move = curPos - offsetX - 1 - (prevlenght - offsetX);
          area.setSelectionRange(move, move);
        }
      }
    }
    curcount += 1;
  }
};
keyboard.doArrowDown = function doArrowDown() {
  const curPos = area.selectionStart;
  const mas = area.value.split('\n');
  let offsetX = 0;

  let nextlength = 0;
  let curlength = 0;
  let curcount = 0;
  const move = 0;

  for (let i = 0; i < mas.length; i += 1) {
    const element = mas[i];

    offsetX = 0;
    for (let j = 0; j < element.length; j += 1) {
      const char = element[j];
      offsetX += 1;
      curcount += 1;
      if (i < mas.length - 1) {
        nextlength = mas[i + 1].length;
        curlength = mas[i].length;


        if (curcount === curPos) {
          area.setSelectionRange(move, move);
        }
      }
      curcount += 1;
    }
  }
};
