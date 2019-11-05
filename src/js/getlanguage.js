function getLocalLanguage() {
  return localStorage.getItem('lang') || 'eng';
}
export default getLocalLanguage;
