function printNumbers(num) {
	if (num > 0) {
		printNumbers(num - 1);
		console.log(num);
	}
}

printNumbers(5); // 1 2 3 4 5
console.log('=============');

function countdown(num) {
	if (num < 1) {
		console.log('Готово');
		return;
	}
	console.log(num--);
	countdown(num);
}

countdown(5); // 5 4 3 2 1 Готово

console.log('=============');

function factorial(n) {
	if (n <= 1) {
		return 1;
	}

	return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
console.log(factorial(3)); // 6

console.log('=============');

function fibonacci(num) {
	if (num <= 2) {
		return 1;
	}
	return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(6)); // 8
console.log(fibonacci(10)); // 55
