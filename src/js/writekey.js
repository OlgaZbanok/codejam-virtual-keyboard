
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
      a.value += '\t';
      break;
    case 'Space':
      a.value += ' ';
      break;
    case 'Enter':
      a.value += '\n';
      break;
    case 'Backspace':
      a.value = (a.value).slice(0, -1);
      break;
    case 'AltLeft':
      a.value += '';
      break;
    case 'AltRight':
      a.value += '';
      break;
    case 'ControlLeft':
      a.value += '';
      break;
    case 'ControlRight':
      a.value += '';
      break;
    case 'OSLeft':
      a.value += '';
      break;
    case 'OSRight':
      a.value += '';
      break;
    case 'ShiftRight':
      a.value += '';

      break;
    case 'ShiftLeft':
      a.value += '';

      break;
    case 'ArrowLeft':
      a.value += '';
      break;
    case 'ArrowRight':
      a.value += '';
      break;
    case 'ArrowUp':
      a.value += '';
      break;
    case 'ArrowDown':
      a.value += '';
      break;
    case 'CapsLock':
      a.value += '';

      break;
    default:
      a.value += val;
  }
}
export default writeKey;
