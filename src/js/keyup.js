function keyupListener(e) {
  const ecode = `.${e.code}`;
  const key = document.querySelector(ecode);
  switch (e.code) {
    case 'ShiftRight':
    case 'ShiftLeft':
      console.log(this);
      this.doShiftUp(key);
      break;
    default:
  }
}
export default keyupListener;
