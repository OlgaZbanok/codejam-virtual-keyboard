import getLocalLanguage from './getlanguage';

function changeLanguage() {
  const lang = getLocalLanguage();
  if (lang === 'eng') localStorage.setItem('lang', 'rus');
  else localStorage.setItem('lang', 'eng');
  document.querySelectorAll('.keyboard__key').forEach((key) => [...key.children].forEach((el) => el.classList.toggle('current')));
}
export default changeLanguage;
