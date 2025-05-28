const header = document.createElement('header');
header.classList.add('header');
document.body.appendChild(header);

const container = document.createElement('div');
container.classList.add('container', 'header__container');
header.appendChild(container);

const logo = document.createElement('img');
logo.classList.add('logo', 'header__logo');
header.appendChild(logo);

const nav = document.createElement('nav');
nav.classList.add('header__navigation');
container.appendChild(nav);

const navList = document.createElement('ul');
navList.classList.add('header__navigation-list');
nav.appendChild(navList);

const homeItem = document.createElement('li');
homeItem.classList.add('header__navigation-item');
const homeLink = document.createElement('a');
homeLink.classList.add('header__navigation-link');
homeLink.textContent = 'Home';
homeItem.appendChild(homeLink);
navList.appendChild(homeItem);

const shopItem = document.createElement('li');
shopItem.classList.add('header__navigation-item');
const shopLink = document.createElement('a');
shopLink.classList.add('header__navigation-link');
shopLink.textContent = 'Shop';
shopItem.appendChild(shopLink);
navList.appendChild(shopItem);

const buttonsNav = document.createElement('nav');
buttonsNav.classList.add('header__buttons');
container.appendChild(buttonsNav);

const buttonsList = document.createElement('ul');
buttonsList.classList.add('header__navigation-list');
buttonsNav.appendChild(buttonsList);

const firstButtonItem = document.createElement('li');
firstButtonItem.classList.add('header__navigation-item');
const firstButtonLink = document.createElement('a');
firstButtonLink.classList.add('header__navigation-link');
const firstButtonIcon = document.createElement('img');
firstButtonLink.appendChild(firstButtonIcon);
firstButtonItem.appendChild(firstButtonLink);
buttonsList.appendChild(firstButtonItem);

const secondButtonItem = document.createElement('li');
secondButtonItem.classList.add('header__navigation-item');
const secondButtonLink = document.createElement('a');
secondButtonLink.classList.add('header__navigation-link');
const secondButtonIcon = document.createElement('img');
secondButtonLink.appendChild(secondButtonIcon);
secondButtonItem.appendChild(secondButtonLink);
buttonsList.appendChild(secondButtonItem);
