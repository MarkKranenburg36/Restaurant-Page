export default function renderContentMenuPage() {
    const contentContainer = document.getElementById('contentContainer');
    contentContainer.innerHTML = ``;
    contentContainer.classList.add('centered');

    const menuHeader = document.createElement('h1');
    menuHeader.innerText = 'Menu';
    contentContainer.appendChild(menuHeader);

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuGrid');
    menuContainer.classList.add('contentWith');

    const menuSubtitles = ['VOORGERECHTEN', 'NOEDELGERECHTEN', 'RUNDVLEESGERECHTEN'];
    for(let i = 0; i < menuSubtitles.length; i++) {
        const subtitle = document.createElement('h2');
        subtitle.innerText = menuSubtitles[i];
        if (subtitle.innerText === 'RUNDVLEESGERECHTEN') { subtitle.classList.add('beefSubheader') }
        menuContainer.appendChild(subtitle);
    }
    

    const appetizersContainer = document.createElement('div');
    appetizersContainer.classList.add('appetizers');
    appetizersContainer.classList.add('menuItemList');
    const listAppetizers = ['LOEMPIA (4 STUKS)', '9.50', 'LOEMPIA MET KIP (2 STUKS)', '8.00', 'KRAB WONTONS (4 STUKS)', '7.00', 'CHICKEN WINGS (6 STUKS)', '9.00', 'CHICKEN SATE (4 STUKS)', '10.00'];
    appetizersContainer.innerHTML = listAppetizers.map(el => `<p>${el}</p>`).join('');
    menuContainer.appendChild(appetizersContainer);

    const elements = [menuHeader, menuContainer];
    elements.forEach(el => {
        contentContainer.appendChild(el);
    });
}