function changeRegister() {
  let small;
  let big;

  document.querySelectorAll('.keyboard__key .current').forEach((key) => {
    key.childNodes.forEach((el) => el.classList.toggle('on'));
  });
}

export default changeRegister;
