import keysLayout from './keyslayout';
import removeActiveKey from './removeactivekey';

function keydownListener(e) {
  removeActiveKey();
  const ecode = `.${e.code}`;
  const key = document.querySelector(ecode);

  if (key) key.classList.add('keyboard__key-activatable');
}
export default keydownListener;
