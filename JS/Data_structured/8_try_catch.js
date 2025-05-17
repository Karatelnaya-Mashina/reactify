function divide(a, b) {
	try {
		if (b === 0) {
			console.log('Cannot divide by zero');
			throw new Error('деление на 0 невозможно');
		}
		return a / b;
	} catch (error) {
		console.log('Ошибка,', error.message);
	} finally {
		console.log('Operation completed');
	}
}

divide(10, 0);
divide(10, 2);

function parseJSON(jsonString) {
	try {
		const parseJson = JSON.parse(jsonString);
		return parseJson;
	} catch (error) {
		console.log('Error', error.message);
	} finally {
		return 'Parsing completed';
	}
}
console.log(parseJSON('{"name": "John", "age": 30}')); // Должно вывести объект и "Parsing completed"
console.log(parseJSON('{name: John, age: 30}')); // Должно вывести "Invalid JSON format" и "Parsing completed"

function getStringLength(str) {
	try {
		console.log(str.length);
		// if (!str) {
		// 	console.log('Input is not a string');
		// }
	} catch (error) {
		console.log('Input is not a string');
	} finally {
		console.log('String length checked');
	}
}
getStringLength('Hello'); // Должно вывести: длина строки 5 и "String length checked"
getStringLength(null); // Должно вывести: "Input is not a string" и "String length checked"

function sqrt(x) {
	try {
		if (x < 0) {
			throw new Error(x);
		}
		console.log(Math.sqrt(x));
	} catch (error) {
		console.log('Cannot calculate square root of a negative number');
	} finally {
		console.log('Square root calculation completed');
	}
}
sqrt(9); // Должно вывести 3 и "Square root calculation completed"
sqrt(-9); // Должно вывести "Cannot calculate square root of a negative number" и "Square root calculation completed"

let balance = 500;
function withdraw(amount) {
	try {
		balance -= amount;
		if (balance < 0) {
			throw new Error();
		}
		console.log(balance);
	} catch (error) {
		console.log('Insufficient funds');
	} finally {
		console.log('Transaction completed');
	}
}
withdraw(300); // Должно вывести оставшийся баланс и "Transaction completed"
withdraw(600); // Должно вывести "Insufficient funds" и "Transaction completed"
