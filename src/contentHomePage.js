import chefImg from './assets/chef.jpg';

export default function contentHomePage() {
    const contentContainer = document.getElementById('content');

    const img = document.createElement('img');
    img.src = chefImg;
    contentContainer.appendChild(img);

    
    const heroHeader = document.createElement('h1');
    heroHeader.innerText = 'Welkom bij Chopstick Cheff - waar Aziatische smaken tot leven komen.'
    contentContainer.appendChild(heroHeader)

    const heroParagraph = document.createElement('p');
    heroParagraph.innerText = `Laat je meevoeren op een culinaire reis door het Verre Oosten, 
    met authentieke gerechten, moderne twist en de passie van onze chefs in elke hap. Van dampende 
    ramen tot knapperige wokgerechten - bij Chopstick Cheff proef je de kunst van de Aziatische keuken. 
    Pak je chopsticks erbij... en ontdek jouw nieuwe favoriete smaken.`;
    contentContainer.appendChild(heroParagraph);
}
