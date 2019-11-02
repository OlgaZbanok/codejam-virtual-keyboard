function removeActiveKey() {
  const activekey = document.querySelector('.keyboard__key-activatable');
  if (activekey) {
    activekey.classList.remove('keyboard__key-activatable');
  }
}
export default removeActiveKey;
