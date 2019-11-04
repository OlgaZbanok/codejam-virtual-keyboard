function highlightButton(key) {
  const keyboard = document.querySelector('.keyboard');
  if (key.classList.contains('ShiftLeft') || key.classList.contains('ShiftRight')) {
    document.querySelector('.ShiftLeft').classList.toggle('keyboard__key-activatable');
    document.querySelector('.ShiftRight').classList.toggle('keyboard__key-activatable');
  } else if (key.classList.contains('CapsLock')) {
    key.classList.toggle('keyboard__key-activatable');
  } else {
    key.classList.add('active');
    setTimeout(() => {
      key.classList.remove('active');
    }, 300);
  }
  return false;
}

export default highlightButton;
