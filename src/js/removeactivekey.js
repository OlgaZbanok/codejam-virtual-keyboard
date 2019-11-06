function removeActiveKey() {
  const activekey = document.querySelectorAll('.keyboard__key-activatable');

  if (activekey) {
    activekey.forEach((k) => k.classList.remove('keyboard__key-activatable'));
  }
}
export default removeActiveKey;
