const footer = document.getElementById('footer')
const parentFooter = footer.parentNode

console.log(parentFooter);

const description = document.querySelector('.description')
const parentDescription = description.parentNode;

console.log(parentDescription);

const mainContent = document.getElementById('main-content')
const parentMain = mainContent.parentNode;

console.log(parentMain);

const sectionTwo = document.getElementById('section-2')
const parentSectionTwo = sectionTwo.parentNode;

console.log(parentSectionTwo);

const sectionTitle = document.querySelector('.section-title');
const parentSectionTitle = sectionTitle.parentNode;

console.log(parentSectionTitle);

const header = document.getElementById('header');
const childrenHeader = header.children;

console.log(childrenHeader);

const childrenFooter = footer.children;

console.log(childrenFooter);

const firstChildrenMain = mainContent.firstElementChild
const lastChildrenMain = mainContent.lastElementChild

console.log(firstChildrenMain);
console.log(lastChildrenMain);

const sectionOne = document.getElementById('section-1');
const childrenSectionOne = sectionOne.children;
const nextElementSectionOne = sectionOne.nextElementSibling
const previousElementSectionTwo = sectionTwo.previousElementSibling

console.log(childrenSectionOne);
console.log(nextElementSectionOne);
console.log(previousElementSectionTwo);

const nextElementSectionTitle = sectionTitle.nextElementSibling

console.log(nextElementSectionTitle);

const nextElementDescription = description.nextElementSibling

console.log(nextElementDescription);

const nextElementFooter = footer.nextElementSibling

console.log(nextElementFooter);

const titleSectionTwo = sectionTwo.querySelector('.section-title')
const parentTitleSectionTwo = titleSectionTwo.parentNode

console.log(parentTitleSectionTwo);

const nextElementFirstChildMain = firstChildrenMain.nextElementSibling

console.log(nextElementFirstChildMain);

const previousElementLastChild = lastChildrenMain.previousElementSibling

console.log(previousElementLastChild);

const childrenParentFooter = parentFooter.children

console.log(childrenParentFooter);


const lastChildParentDescription = parentDescription.lastElementChild

console.log(lastChildParentDescription);
