export default function renderContentMenuPage() {
    const contentContainer = document.getElementById('contentContainer');
    contentContainer.innerHTML = ``;
    contentContainer.classList.add('centered');

    const menuHeader = document.createElement('h1');
    menuHeader.innerText = 'Menu';
    contentContainer.appendChild(menuHeader);

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuGrid');

    const menuSubtitles = ['VOORGERECHTEN', 'NOEDELGERECHTEN', 'RUNDVLEESGERECHTEN'];
    for(let i = 0; i < menuSubtitles.length; i++) {
        const subtitle = document.createElement('h2');
        subtitle.innerText = menuSubtitles[i];
        if (subtitle.innerText === 'RUNDVLEESGERECHTEN') { subtitle.classList.add('beefSubheader') }
        menuContainer.appendChild(subtitle);
    }
    

    const appetizersContainer = document.createElement('div');
    appetizersContainer.classList.add('appetizers');
    const listAppetizers = ['LOEMPIA (4 STUKS)', 'LOEMPIA MET KIP (2 STUKS)', 'KRAB WONTONS (4 STUKS)', 'CHICKEN WINGS (6 STUKS)', 'CHICKEN SATE (4 STUKS)'];
    appetizersContainer.innerHTML = listAppetizers.map(item => `<p>${item}</p>`).join('');
    menuContainer.appendChild(appetizersContainer);

    const elements = [menuHeader, menuContainer];
    elements.forEach(el => {
        el.classList.add('contentWidth');
        contentContainer.appendChild(el);
    });
}