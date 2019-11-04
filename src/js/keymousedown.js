import {
  kMaxLength,
} from 'buffer';
import keysLayout from './keyslayout';
import writeKey from './writekey';

function keymousedownListener(e) {
  let key = e.target;
  const area = document.querySelector('.inputarea');

  if (e.target.classList.contains('keyboard__key')) key = e.target;
  else if (e.target.classList.contains('on')) key = e.target.parentNode.parentNode;
  else return false;

  writeKey(key, area);
  return false;
}
export default keymousedownListener;
