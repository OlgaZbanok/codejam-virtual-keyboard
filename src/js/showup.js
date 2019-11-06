function showUp(key, forceShiftToggle = false) {
  const keyboard = document.querySelector('.keyboard');
  if (key.classList.contains('ShiftLeft') || key.classList.contains('ShiftRight') || forceShiftToggle) {
    document.querySelector('.ShiftLeft').classList.toggle('keyboard__key-activatable');
    document.querySelector('.ShiftRight').classList.toggle('keyboard__key-activatable');
  } else if (key.classList.contains('CapsLock')) {
    key.classList.toggle('keyboard__key-activatable');
  } else {
    setTimeout(() => {
      key.classList.remove('active');
    }, 250);
  }
  return false;
}

export default showUp;
