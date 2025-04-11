// Переворот строки
console.log('Переворот строки');

function reverseString(string) {
	// return string.split('').reverse().join(''); // Ответ 1
	// let cycleRevers = [];
	// for (i of string) {
	// 	cycleRevers.unshift(i);
	// }
	// return cycleRevers.join(''); // Ответ 2
	// return string === '' ? '' : reverseString(string.slice(1)) + string[0]; // Ответ 3
	// return string.split('').reduceRight((str, letter) => str + letter, ''); // Ответ 4
	// return Array.from(string).reverse().join(''); // Ответ 5
	return [...string].reverse().join('');
}
console.log(reverseString('world'));

// Сумма чисел
console.log('Сумма чисел');

function sumArray(arr) {
	// let sum = 0;
	// for (let i = 0; i < arr.length; i++) {
	// 	sum += arr[i];
	// }
	// return sum; //Ответ 1
	// return arr.reduce((sum, num) => num + sum, 0); // ответ 2
}

console.log(sumArray([1, 2, 5])); // 8
