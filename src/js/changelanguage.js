function changeLanguage() {
  document.querySelectorAll('.keyboard__key').forEach((key) => [...key.children].forEach((el) => el.classList.toggle('current')));
}
export default changeLanguage;
