// Task 1
console.log('Task 1');

let q = 10;
while (q > 0) {
	console.log(q);
	q--;
}

//Task 2
console.log('-------------------------');
console.log('Task 2');

for (let i = 1; i <= 10; i++) {
	if (i % 2 === 0) {
		console.log(i);
	}
}

//Task 3
console.log('-------------------------');
console.log('Task 3');

let w = 1;
do {
	console.log(w);
	w++;
} while (w <= 5);

//Task 4
console.log('-------------------------');
console.log('Task 4');

for (let i = 2; i <= 4; i++) {
	for (let j = 1; j <= 10; j++) {
		console.log(`${i} * ${j} = ${i * j}`);
	}
}

//Task 5
console.log('-------------------------');
console.log('Task 5');

const book = {
	title: 'The Great Gatsby',
	author: 'F. Scott Fitzgerald',
	year: 1925,
	genre: 'Fiction',
};

for (i in book) {
	console.log(`${i}: ${book[i]}`);
}

//Task 6
console.log('-------------------------');
console.log('Task 6');

const numbers = [23, 45, 67, 12, 34, 89, 10];
max = 0;
for (let i of numbers) {
	if (i > max) {
		max = i;
	}
}
console.log(`Максимальное число: ${max}`);

//Task 7
console.log('-------------------------');
console.log('Task 7');

const students = [
	{ name: 'Alice', grade: 85 },
	{ name: 'Bob', grade: 92 },
	{ name: 'Charlie', grade: 88 },
];
for (student of students) {
	console.log(`${student.name}: ${student.grade}`);
}

//Task 8
console.log('-------------------------');
console.log('Task 8');

const sentence = 'JavaScript is awesome!';
let count = 0;
for (i of sentence) {
	if (i == ' ') {
		continue;
	}
	count++;
}
console.log(`Количество символов (без пробелов): ${count}`);

//Task 9
console.log('-------------------------');
console.log('Task 9');

const car = {
	make: 'Tesla',
	model: 'Model S',
	year: 2021,
	color: 'red',
};
let counter = 0;
for (i in car) {
	counter++;
}
console.log(`Количество свойств: ${counter}`);

//Task 10
console.log('-------------------------');
console.log('Task 10');

const user = {
	firstName: 'John',
	lastName: 'Doe',
	age: 25,
};

let fullUser = '';

for (i in user) {
	fullUser += user[i] + ' ';
}
console.log(fullUser);

//Task 11
console.log('-------------------------');
console.log('Task 11');

const students1 = [
	{ name: 'Alice', grade: 85 },
	{ name: 'Bob', grade: 92 },
	{ name: 'Charlie', grade: 88 },
];

let averageScore = 0;

for (i of students1) {
	averageScore += i.grade;
}
console.log(`Средний балл: ${(averageScore / students1.length).toFixed(2)}`);

//Task 12
console.log('-------------------------');
console.log('Task 12');

const person = {
	name: 'Alice',
	age: 25,
	occupation: 'developer',
	salary: 5000,
};

for (i in person) {
	if (typeof person[i] !== 'number') {
		console.log(`${i}: ${person[i]}`);
	}
}
