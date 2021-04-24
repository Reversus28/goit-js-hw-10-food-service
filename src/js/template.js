import menuData from '../menu.json';
import templateMenu from '../templates/menu.hbs';

const menu = templateMenu({ menuData });
const listEl = document.querySelector(".menu.js-menu");
listEl.insertAdjacentHTML('beforeend', menu);
