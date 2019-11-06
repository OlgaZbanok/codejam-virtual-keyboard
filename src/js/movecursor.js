export default function moveCursor(key) {
  const area = document.querySelector('.inputarea');
  const curPos = area.selectionStart;

  if (key.classList.contains('ArrowLeft')) {
    document.getSelection().removeAllRanges();
    if (curPos !== 0) area.setSelectionRange(curPos - 1, curPos - 1);
  }
  if (key.classList.contains('ArrowRight')) {
    if (curPos !== area.value.length) area.setSelectionRange(curPos + 1, curPos + 1);
  }
  if (key.classList.contains('ArrowUp')) {
    const size = 100;
    let offsetX = 0;
    let prevlength = 0;
    let i = curPos;
    if (area.value[i] === '\n') i -= 1;
    while (area.value[i] !== '\n' && i >= 0) {
      offsetX += 1;
      i -= 1;
    }

    if (area.value[i] === '\n') offsetX -= 1;
    if (offsetX >= size) {
      area.setSelectionRange(curPos - size, curPos - size);
      return true;
    }
    i -= 1;
    while (area.value[i] !== '\n' && i >= 0) {
      prevlength += 1;
      i -= 1;
    }

    prevlength %= size;
    if (offsetX >= prevlength) {
      if (area.value[i] === '\n') offsetX += 1;

      area.setSelectionRange(curPos - offsetX - 1, curPos - offsetX - 1);
      return true;
    }
    if (offsetX < prevlength) {
      area.setSelectionRange(curPos - prevlength - 1, curPos - prevlength - 1);
      return true;
    }
  }


  if (key.classList.contains('ArrowDown')) {
    const size = 100;
    let offsetLeft = 0;
    let offsetRight = 0;
    let nextlength = 0;
    let i = curPos;
    if (area.value[i] === '\n') { i -= 1; }
    while (area.value[i] !== '\n' && i >= 0) {
      offsetLeft += 1;
      i -= 1;
    }
    if (area.value[i] === '\n' || i < 0) {
      offsetLeft -= 1;
    }
    i = curPos;

    while (area.value[i] !== '\n' && i < area.value.length) {
      offsetRight += 1;
      i += 1;
    }
    offsetLeft %= size;

    if ((offsetLeft + offsetRight) > size) {
      if ((offsetLeft + offsetRight) % size <= offsetLeft) {
        area.setSelectionRange(curPos + offsetRight, curPos + offsetRight);
        return true;
      }
      area.setSelectionRange(curPos + size, curPos + size);
      return true;
    }
    if (area.value[i] === '\n') i += 1;
    while (area.value[i] !== '\n' && i < area.value.length) {
      nextlength += 1;
      i += 1;
    }

    if (offsetLeft <= nextlength) {
      area.setSelectionRange(curPos + offsetLeft + offsetRight + 1,
        curPos + offsetLeft + offsetRight + 1);
      return true;
    }
    if (offsetLeft > nextlength) {
      area.setSelectionRange(curPos + nextlength + offsetRight + 1,
        curPos + nextlength + offsetRight + 1);
      return true;
    }
  }
  return true;
}
