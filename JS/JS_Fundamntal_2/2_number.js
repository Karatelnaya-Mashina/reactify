// Напишите функцию, которая принимает десятичное число и возвращает объект с его значением в двоичной, восьмеричной и шестнадцатеричной системах счисления.

function convertNumberSystems(num) {
	return {
		binary: num.toString(2),
		octal: num.toString(8),
		hex: num.toString(16),
	};
}
console.log(convertNumberSystems(255));
// { binary: '11111111', octal: '377', hex: 'ff' }

// Напишите функцию, которая генерирует случайное число от 1 до 1000 и округляет его до ближайшего целого числа, до двух знаков после запятой или до ближайшего большего целого числа, в зависимости от параметра

function generateAndRoundNumber() {
	const random = Math.random() * 1000;
	return {
		round: Math.round(random),
		fixed: random.toFixed(2),
		ceil: Math.ceil(random),
	};
}

console.log(generateAndRoundNumber());

// Напишите функцию, которая принимает значение и которая возвращает true - если аргумент NaN или Infinity,  и false - если нет.

const filterFiniteNumbers = item => !isFinite(item) || isNaN(item);

console.log(filterFiniteNumbers());

// Напишите функцию, которая принимает строку, содержащую число, и возвращает это число. Должно работать как  с integer, так и с float

function parseNumbers(num) {
	return {
		integer: parseInt(num),
		float: parseFloat(num),
	};
}

console.log(parseNumbers('123.456px'));

// Напишите функцию, которая складывает два числа с плавающей точкой, но гарантирует правильную точность (без типичных ошибок с плавающей точкой).

function addFloats(num1, num2) {
	let res = num1 + num2;
	return res.toPrecision(3);
}

console.log(addFloats(0.1, 0.2));

// Напишите функцию, которая округляет число до указанного количества знаков после запятой.

const roundToDecimals = (num, value) => num.toFixed(value);

console.log(roundToDecimals(123.456789, 3)); // 123.457

// Напишите функции, которая принимает ряд чисел и возвращает максимальное и минимальное значение из него.

function findMax(num1, num2, num3) {
	return Math.min(num1, num2, num3);
}

function findMin(num1, num2, num3) {
	return Math.max(num1, num2, num3);
}

console.log(findMax(1, 2, 3));
console.log(findMin(1, 2, 3));

// Напишите функцию, которая проверяет, является ли число целым и возвращает соответствующее сообщение.

const checkIfInteger = num => Number.isInteger(num);

console.log(checkIfInteger(5)); // "5 is an integer"
console.log(checkIfInteger(5.1)); // "5.1 is not an integer"

// Напишите функцию, которая сравнивает два числа с плавающей точкой с заданной точностью (например, до 5-го знака после запятой).

const areFloatsEqual = (num1, num2) =>
	num1.toPrecision(5) === num2.toPrecision(5);

console.log(areFloatsEqual(0.1 + 0.2, 0.3)); // true

