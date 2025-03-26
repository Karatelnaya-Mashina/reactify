// Замените все гласные на восклицательные знаки в предложении. — гласная.aeiouAEIOU

function replace(s) {
	//coding and coding....
	const arrLetter = ['a', 'e', 'i', 'o', 'u'];
	let newArrLetter = [];
	for (let letter of s) {
		if (arrLetter.includes(letter.toLowerCase())) {
			newArrLetter.push('!');
		} else {
			newArrLetter.push(letter);
		}
	}
	return newArrLetter.join('');
}

console.log(replace('Hi!')); //  --> "H!!"
console.log(replace('!Hi! Hi!')); //  --> "!H!! H!!"
console.log(replace('aeiou')); //  --> "!!!!!"
console.log(replace('ABCDE')); //	 --> "!BCD!"

// Эта функция принимает два числа в качестве параметров, первое из которых является коэффициентом, а второе число — экспонентой.
// Функция должна умножить два числа, а затем вычесть 1 из экспоненты. Затем он должен вернуть выражение (например, 28x^7). не должна быть усечена, когда экспонента = 2."^1"
// Например:
// derive(7, 8)
// В этом случае функция должна умножить 7 и 8, а затем вычесть 1 из 8. Он должен вывести , первое число 56 является произведением двух чисел, а второе число является экспонентой минус 1."56x^7"
// derive(7, 8) --> this should output "56x^7"
// derive(5, 9) --> this should output "45x^8"
// Примечания:
// На выходе этой функции должна быть строка
// Экспонента никогда не будет равна 1, и ни одно из чисел никогда не будет равно 0

const derive = (coefficient, exponent) =>
	`${coefficient * exponent}x^${exponent - 1}`;

console.log(derive(5, 9));

// Опишите функцию, которая возвращает общую площадь поверхности и объем коробки в виде массива: [area, volume]

function getSize(width, height, depth) {
	let arr = [];
	arr.push(2 * depth * width + 2 * depth * height + 2 * width * height);
	arr.push(depth * width * height);
	return arr;
}

console.log(getSize(5, 9, 8));

// Завершите функцию, которая возвращает день недели в соответствии с входным номером:

// 1 Возвращает "Sunday"
// 2 Возвращает "Monday"
// 3 Возвращает "Tuesday"
// 4 Возвращает "Wednesday"
// 5 Возвращает "Thursday"
// 6 Возвращает "Friday"
// 7 Возвращает "Saturday"
// В противном случае возвращает "Wrong, please enter a number between 1 and 7"

function whatday(num) {
	switch (num) {
		case 1:
			return 'Sunday';
		case 2:
			return 'Monday';
		case 3:
			return 'Tuesday';
		case 4:
			return 'Wednesday';
		case 5:
			return 'Thursday';
		case 6:
			return 'Friday';
		case 7:
			return 'Saturday';
		default:
			return 'Wrong, please enter a number between 1 and 7';
	}
}

console.log(whatday(1));

// Задача
// Вы только что выехали на идеально прямую улицу с точно такими же домами по обе стороны дороги. Естественно, вы хотели бы узнать номер дома людей на другой стороне улицы. Выглядит улица примерно так:n
// 1|   |6
// 3|   |4
// 5|   |2
//   you
// Пример (адрес, вывод n -->)
// Указав номер вашего дома и протяженность улицы, укажите номер дома на противоположной стороне улицы.addressn
// 1, 3 --> 6
// 3, 3 --> 4
// 2, 3 --> 5
// 3, 5 --> 8

function overTheRoad(address, n) {
	return n * 2 - (address - 1);
}

console.log(overTheRoad(6,5));
