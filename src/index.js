import './styles/main.css';
import renderContentHomePage from './contentHomePage.js';
import renderContentMenuPage from './contentMenuPage.js';
import renderContentContactPage from './contentContactPage.js';

window.addEventListener("load", () => {
    const homeBtn = document.getElementById('homeBtn');
    homeBtn.addEventListener('click', () => {
        renderContentHomePage();
    });
    
    const menuBtn = document.getElementById('menuBtn');
    menuBtn.addEventListener('click', () => {
        renderContentMenuPage();
    });

    const contactBtn = document.getElementById('contactBtn');
    contactBtn.addEventListener('click', () => {
        renderContentContactPage();
    });

    renderContentHomePage();
});