const person = {
	fistName: 'Ivan',
	lastName: 'Ivanov',
	age: 5,
};

const book = {
	title: 'Tundra',
	author: 'Ivan',
	year: 2020,
};
book.year = 2023;
delete book.author;
console.log(book);


const obj1 = { name: 'Alice', age: 25 };
const obj2 = { name: 'Alice', age: 25 };

console.log(obj1 == obj2);
console.log(obj1 === obj2);

obj2.name = 'Bob';
console.log(obj1 == obj2);