const boxOne = document.querySelector('#box1');
const boxTwo = document.querySelector('#box2');
const boxThree = document.querySelector('#box3');
const boxFour = document.querySelector('#box4');
const container = document.querySelector('#container');
const referenceBox = document.querySelector('#referenceBox');


let counterBox = 6;

const lastBox = document.createElement('div');
const paragraph = document.createElement('p');
const replaceBox = document.createElement('div');
const boxThreeCopy = boxThree.cloneNode(true);


function box() {
	const box = document.createElement('div');
	box.classList.add(`box`);
	box.textContent = `Блок №${counterBox}`;
	box.setAttribute('id', `box${counterBox}`);
	counterBox++
	return box;
}

console.log(boxOne);
boxTwo.textContent = 'Измененный блок 2';
lastBox.textContent = 'Новый блок';
lastBox.classList.add('box');
container.append(lastBox);
boxThree.classList.add('highlighted');
boxOne.setAttribute('data-info', 'info1');
container.append(boxThree);
referenceBox.insertAdjacentHTML(
	'beforebegin',
	'<div class="box">Новый блок перед блоком-ссылкой</div>'
);
boxFour.remove();
referenceBox.classList.toggle('hidden');
paragraph.textContent = 'Текстовый элемент';
container.append(paragraph);
container.append(box())
container.append(box())
container.append(box())
replaceBox.classList.add('box');
replaceBox.textContent = 'Новый блок вместо первого'
boxOne.replaceWith(replaceBox);
boxThree.before(boxTwo);
container.insertBefore(box(), boxTwo);
container.append(boxThreeCopy);
boxOne.classList.add('highlighted', 'box');
boxTwo.classList.toggle('highlighted');
boxThree.parentNode.remove();