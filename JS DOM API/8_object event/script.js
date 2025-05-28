const btnText = document.getElementById('changeTextButton');
btnText.addEventListener('click', function (event) {
	this.textContent = 'Текст изменен!';
	console.log(event.type, event.target);
});

const logArea = document.getElementById('logArea');
const inputField = document.getElementById('inputField');
inputField.addEventListener('input', function (event) {
	logArea.textContent = `Введено: ${event.target.value}`;
});

const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseenter', function () {
	this.style.background = 'lightGreen';
	console.log('Наведение на блок');
});
hoverBox.addEventListener('mouseleave', function () {
	this.style.background = 'lightBlue';
	console.log('Уход с блока');
});

const preventLink = document.getElementById('preventLink');
preventLink.addEventListener('click', function (event) {
	event.preventDefault();
	alert('Переход по ссылке отменен');
});

document.body.addEventListener('click', function(event) {
	logArea.textContent += ` Клик: X=${event.clientX}, Y=${event.clientY} |`
})