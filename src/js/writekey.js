
function writeKey(key, area) {
  const a = area;
  let code = '';
  let cur = '';
  let val = '';

  [cur] = [...key.children].filter((k) => k.matches('.current'));
  [, code] = key.classList;
  val = cur.innerText;
  switch (code) {
    case 'Tab':
      a.setRangeText('\t', a.selectionStart, a.selectionEnd, 'end');
      break;
    case 'Space':
      a.setRangeText(' ', a.selectionStart, a.selectionEnd, 'end');
      break;
    case 'Enter':
      a.setRangeText('\n', a.selectionStart, a.selectionEnd, 'end');
      break;
    case 'Backspace':
      if (a.selectionStart > 0) a.setRangeText('', a.selectionStart - 1, a.selectionEnd, 'end');
      if (a.selectionStart === 0) a.setRangeText('', a.selectionStart, a.selectionEnd, 'end');
      break;
    case 'AltLeft':
    case 'AltRight':
    case 'ControlLeft':
    case 'ControlRight':
    case 'OSLeft':
    case 'OSRight':
    case 'ArrowLeft':
    case 'ArrowRight':
    case 'ArrowUp':
    case 'ArrowDown':
      a.value += '';
      break;

    default:
      a.setRangeText(val, a.selectionStart, a.selectionEnd, 'end');
  }
}
export default writeKey;
