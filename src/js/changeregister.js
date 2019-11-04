function changeRegister() {
  let small;
  let big;

  document.querySelectorAll('.keyboard__key').forEach((key) => {
    key.childNodes.forEach((el) => el.childNodes.forEach((item) => item.classList.toggle('on')));
  });
}

export default changeRegister;
