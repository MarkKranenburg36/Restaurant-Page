import './style.css';
import contentHomePage from './contentHomePage.js';
import renderContentMenuPage from './contentMenuPage.js';

window.addEventListener("load", () => {
    const menuBtn = document.getElementById('menuBtn');
    menuBtn.addEventListener('click', (event) => {
        renderContentMenuPage();
    });

    contentHomePage();
});