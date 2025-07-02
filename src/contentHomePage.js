import chefImg from './assets/hero_img.webp';

export default function renderContentHomePage() {
    const contentContainer = document.getElementById('contentContainer');
    contentContainer.classList.add('centered');

    const img = document.createElement('img');
    img.src = chefImg;
    img.classList.add('contentWith');
    contentContainer.appendChild(img);

    
    const heroHeader = document.createElement('h1');
    heroHeader.innerText = 'Welkom bij Chopstick Cheff - waar Aziatische smaken tot leven komen.'
    heroHeader.classList.add('contentWith');
    contentContainer.appendChild(heroHeader)

    const heroParagraph = document.createElement('p');
    heroParagraph.innerText = `Laat je meevoeren op een culinaire reis door het Verre Oosten, met authentieke gerechten, moderne twist en de passie van onze chefs in elke hap. Van dampende ramen tot knapperige wokgerechten - bij Chopstick Cheff proef je de kunst van de Aziatische keuken. Pak je chopsticks erbij... en ontdek jouw nieuwe favoriete smaken.`;
    heroParagraph.classList.add('contentWith');
    contentContainer.appendChild(heroParagraph);
}
