{
	// Task 1
	console.log('Task 1');

	let a = 5;
	let b = 10;
	[a, b] = [b, a];
	console.log(a); // 10
	console.log(b); // 5
}
{
	// Task 2
	console.log('-------------------');
	console.log('Task 2');

	function getNumbers(num) {
		return [...num];
	}
	let [num1, num2, num3] = getNumbers('123');
	console.log(num1); // 1
	console.log(num2); // 2
	console.log(num3); // 3
}
{
	// Task 3
	console.log('-------------------');
	console.log('Task 3');

	let arr1 = [7];
	const [a1, b1 = 2, c1 = 3] = [...arr1];
	console.log(a1); // 7
	console.log(b1); // 2 (значение по умолчанию)
	console.log(c1); // 3 (значение по умолчанию)
}
{
	// Task 4
	console.log('-------------------');
	console.log('Task 4');

	const matrix = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	];
	const [[first], [one, element, two], [three]] = matrix;
	console.log(element); // 5
}
{
	// Task 5
	console.log('-------------------');
	console.log('Task 5');

	const person = {
		name: 'Alice',
		age: 25,
		job: 'Engineer',
	};
	const { name, age, job } = person;
	console.log(name); // 'Alice'
	console.log(age); // 25
	console.log(job); // 'Engineer'
}
{
	// Task 6
	console.log('-------------------');
	console.log('Task 6');

	const book = {
		title: 'JavaScript Essentials',
		author: 'John Doe',
		year: 2021,
	};
	const { title: bookTitle, author: bookAuthor } = book;
	console.log(bookTitle); // 'JavaScript Essentials'
	console.log(bookAuthor); // 'John Doe'
}
{
	// Task 7
	console.log('-------------------');
	console.log('Task 7');

	const user = {
		name1: 'Bob',
	};
	const { name1, age1 = 30 } = user;
	console.log(name1); // 'Bob'
	console.log(age1); // 30 (значение по умолчанию)
}
{
	// Task 8
	console.log('-------------------');
	console.log('Task 8');

	const employee = {
		id: 101,
		info: {
			name2: 'Jane',
			department: 'Marketing',
		},
	};
	const {
		info: { name2, department },
	} = employee;
	console.log(name2); // 'Jane'
	console.log(department); // 'Marketing'
}
{
	// Task 9
	console.log('-------------------');
	console.log('Task 9');

	const numbers = [1, 2, 3, 4, 5];
	const [first1, ...restNumbers] = numbers;
	console.log(first1); // 1
	console.log(restNumbers); // [2, 3, 4, 5]
}
{
	// Task 10
	console.log('-------------------');
	console.log('Task 10');

	const product = {
		name3: 'Laptop',
		price: 1000,
		brand: 'BrandName',
		stock: 50,
	};
	const { name3, ...rest } = { ...product };
	console.log(name3); // 'Laptop'
	console.log(rest); // { price: 1000, brand: 'BrandName', stock: 50 }
}
{
	// Task 11
	console.log('-------------------');
	console.log('Task 11');

	const arr2 = [1, 2, 3];
	const arr3 = [4, 5, 6];
	const mergedArray = [...arr2, ...arr3];
	console.log(mergedArray); // [1, 2, 3, 4, 5, 6]
}
{
	// Task 12
	console.log('-------------------');
	console.log('Task 12');

	const car = {
		brand: 'Toyota',
		model: 'Corolla',
		year: 2020,
	};
	// Создай копию объекта car и измени year на 2022
	const newCar = { ...car, year: 2022 };
	console.log(newCar); // { brand: 'Toyota', model: 'Corolla', year: 2022 }
}

{
	// Task 13
	console.log('-------------------');
	console.log('Task 13');
	const user1 = {
		id: 1,
		profile: {
			name: 'Anna',
			email: 'anna@example.com',
		},
	};
	// Создай копию объекта user и обнови email

	const updatedUser = {
		...user1,
		profile: { name: 'Anna', email: 'new.email@example.com' },
	};
	console.log(updatedUser);
}
// {
//   id: 1,
//   profile: { name: 'Anna', email: 'new.email@example.com' }
// }

// Task 14
console.log('-------------------');
console.log('Task 14');

function displayUserInfo({ name, age }) {
	console.log(`Имя: ${name}, Возраст: ${age}`);
}
const user2 = {
	name: 'John',
	age: 28,
	country: 'USA',
};
displayUserInfo(user2);
// Имя: John, Возраст: 28
