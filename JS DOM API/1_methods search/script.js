const mainHeaderElement = document.getElementById('main-header');
const mainHeaderSelector = document.querySelector('.header');

console.log(mainHeaderElement);
console.log(mainHeaderSelector);

const navItemElements = document.getElementsByClassName('nav-item');
const navItemSelector = document.querySelectorAll('.nav-item');

console.log(navItemElements);
console.log(navItemSelector);

const paragraphTag = document.getElementsByTagName('p');
const paragraphSelector = document.querySelectorAll('p');

console.log(paragraphTag);
console.log(paragraphSelector);

const titleSelector = document.querySelector('.title');
const titleClass = document.getElementsByClassName('title');

console.log(titleSelector);
console.log(titleClass);

const linksSelector = document.querySelectorAll('.link');

console.log(linksSelector);

const arrUlId = mainHeaderElement.querySelector('#nav-list');
const arrUlSelector = mainHeaderElement.querySelector('ul');

console.log(arrUlId);
console.log(arrUlSelector);

const linksNavList = arrUlSelector.querySelectorAll('li');

console.log(linksNavList);

const sectionContent = document.querySelector('.content');
const paragraphContent = sectionContent.querySelector('p');

console.log(sectionContent);
console.log(paragraphContent);

const linksNavItem = document.querySelectorAll('.nav-item');

console.log(linksNavItem);

const footer = document.querySelector('footer');

console.log(footer);

const linkIdOne = document.getElementById('link-1');

console.log(linkIdOne);

const hrefSelectorAll = document.querySelectorAll('[href]');
const hrefSelector = document.querySelector('[href]');

console.log(hrefSelectorAll);
console.log(hrefSelector);

const linksAttributeId = document.querySelectorAll('.link[id]');

console.log(linksAttributeId);

const idLinks = document.querySelectorAll('[id^="link-"]');

console.log(idLinks);

const paragraphNoIntro = document.querySelectorAll('p:not(.intro)');

console.log(paragraphNoIntro);

const titleH2 = document.querySelector('h2');

console.log(titleH2);

const lastLinkNav = arrUlId.lastElementChild;

console.log(lastLinkNav);

const linksWidget = document.querySelectorAll('.widget a');

console.log(linksWidget);

const subFooter = document.querySelector('footer ');

console.log(subFooter);
