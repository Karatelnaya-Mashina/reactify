const block1 = document.querySelector('#block1');
const block2 = document.querySelector('#block2');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const h1 = document.querySelector('h1');
const taskList = document.querySelector('#taskList');

const task4 = document.createElement('li');
task4.textContent = 'Задача 4';

[block1, block2].forEach(block =>
	block.addEventListener('mouseover', function () {
		block.style.background = 'green';
	})
);
[block1, block2].forEach(block =>
	block.addEventListener('mouseout', function () {
		block.style.background = 'blue';
	})
);

input1.addEventListener('input', function (text) {
	console.log(text.target.value);
});
input2.addEventListener('input', function (num) {
	console.log(`Вы вели число: ${num.target.value}`);
});

btn1.addEventListener('click', function () {
	h1.textContent = 'Кнопка 1 нажата';
});

btn2.addEventListener('click', function () {
	taskList.appendChild(task4);
});

taskList.addEventListener('click', function (elem) {
	if (elem.target.tagName === 'LI') {
		elem.target.textContent = 'Выполнено';
	}
});
