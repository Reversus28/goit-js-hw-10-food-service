// Тема
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyEl = document.querySelector('body');
const checkboxEl = document.querySelector('.theme-switch__toggle');

const themeInLocalStorage = localStorage.getItem('Theme');

(function openLastSavedTheme() {
   let defaultTheme = bodyEl.classList.add(Theme.LIGHT);
   
   if (themeInLocalStorage !== null) {
      defaultTheme = bodyEl.classList.remove(Theme.LIGHT);
      bodyEl.classList.add(themeInLocalStorage);

      if (bodyEl.classList.contains(Theme.DARK)) {
         checkboxEl.checked = true;
      }
   }
   
}());

checkboxEl.addEventListener('click', changeTheme);

function changeTheme(e) {
   
   if (checkboxEl.checked !== true) {
      bodyEl.classList.toggle(Theme.LIGHT);
      bodyEl.classList.toggle(Theme.DARK);
   };
   
   if (checkboxEl.checked === true) {
      bodyEl.classList.toggle(Theme.DARK);
      bodyEl.classList.toggle(Theme.LIGHT); 
   };

   bodyEl.classList.contains(Theme.DARK) ? localStorage.setItem('Theme', Theme.DARK) : localStorage.setItem('Theme', Theme.LIGHT);
}
