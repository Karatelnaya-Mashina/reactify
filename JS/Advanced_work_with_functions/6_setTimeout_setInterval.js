// setTimeout(function () {
// 	console.log('Через 5 секунд будет перезагрузка страницы!');
// }, 5000);

// let count = 10;
// const cooldown = setInterval(function () {
// 	console.log(count--);

// 	if (count < 0) {
// 		clearInterval(cooldown);

// 		console.log('Время вышло');
// 	}
// }, 1000);

// let timer = 10;
// const timerThen = setInterval(function () {
// 	console.log('Таймер работает');
// 	timer--;

// 	if (timer < 0) {
// 		clearInterval(timerThen);

// 		console.log('Таймер остановлен');
// 	}
// }, 1000);

// let position = 0;
// const box = document.getElementById('box');
// const moveBox = setInterval(() => {
// 	position += 1;
// 	box.style.left = position + 'px';
// 	if (position >= 1810) {
// 		clearInterval(moveBox); // Останавливаем анимацию, когда коробка достигнет 200px
// 	}
// }, 1);
