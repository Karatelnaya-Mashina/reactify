// Задачи по теме if...else

// Проверка на чётное или нечётное число
let number = 7;

if (number % 2 === 0) {
	console.log('Чётное число');
} else {
	console.log('Нечётное число');
}

// Проверка возраста
let age = 15;

if (age < 13) {
	console.log('Ребёнок'); // если возраст меньше 13.
} else if (age >= 13 && age <= 18) {
	console.log('Подросток'); // если возраст от 13 до 18.
} else {
	console.log('Взрослый'); // если возраст больше 18.
}

// Проверка времени суток
let hour = 14;

if (hour > 6 && hour < 12) {
	console.log('Доброе утро'); // если время от 6 до 12.
} else if (hour > 12 && hour < 18) {
	console.log('Добрый день'); // если время от 12 до 18.
} else if (hour > 18 && hour < 24) {
	console.log('Добрый вечер'); // если время от 18 до 24.
} else {
	console.log('Доброй ночи'); // если время от 0 до 6.
}

// Задачи по тернарному оператору

// Проверка совершеннолетия
let age1 = 17;

console.log(age1 >= 18 ? 'Совершеннолетний' : 'Несовершеннолетний'); // если возраст 18 или больше. || если меньше.

// Проверка температуры
let temperature = 25;

console.log(
	temperature < 0
		? 'Холодно'
		: temperature > 0 && temperature < 30
		? 'Тепло'
		: 'Жарко'
); // если температура ниже 0 || если температура от 0 до 30 || если температура больше 30.

//Проверка наличия скидки
let isMember = true;

console.log(isMember ? 'Скидка 10%' : 'Без скидки'); // если является членом клуба || если не является.

// Задачи по switch

// Определение времени года
let month = 5;

switch (month) {
	case (12, 1, 2):
		console.log('Зима');
		break;
	case (3, 4, 5):
		console.log('Весна');
		break;
	case (6, 7, 8):
		console.log('Лето');
		break;
	case (9, 10, 11):
		console.log('Осень');
		break;
	default:
		console.log('Такого сезона не существует');
		break;
}

// Калькулятор
let a = 10;
let b = 5;
let operator = '+';

switch (operator) {
	case '-':
		console.log(a - b);
		break;
	case '/':
		console.log(a / b);
		break;
	case '*':
		console.log(a * b);
		break;
	case '+':
		console.log(a + b);
		break;
	default:
		console.log('Оператор не найден');
}

// Определение дня недели
let day = 3;

switch (day) {
	case 1:
		console.log('Понедельник');
		break;
	case 2:
		console.log('Вторник');
		break;
	case 3:
		console.log('Среда');
		break;
	case 4:
		console.log('Четверг');
		break;
	case 5:
		console.log('Пятница');
		break;
	case 6:
		console.log('Суббота');
		break;
	case 7:
		console.log('Воскресенье');
		break;
	default:
		console.log('У нас существует только 7 дней в неделе');
}
