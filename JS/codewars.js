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
