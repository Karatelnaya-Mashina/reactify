//Task 1
console.log('------------');
console.log('Task 1');

const car = {
	make: 'BMW',
	model: 'e34',
	year: 2000,
};

for (key in car) {
	console.log(key);
}

//Task 2
console.log('------------');
console.log('Task 2');

const carArr = Object.values(car);
for (key of carArr) {
	console.log(key);
}

//Task 3
console.log('------------');
console.log('Task 3');

const book = {
	title: 'Life',
	author: 'Life',
	pages: 'infinite',
	publishedYear: 'is unknown',
};

const countObj = Object.keys(book);

let len = 0;
for (i in countObj) {
	if (len <= i) {
		len = i + 1;
	}
}
console.log(countObj.length);

//Task 4
console.log('------------');
console.log('Task 4');

const student = {
	name: 'Pasha',
	age: 40,
	grades: [5, 5, 4, 5, 4],
};

let studentEntries = Object.entries(student);

for (arr of studentEntries) {
	console.log(`${arr[0]}: ${arr[1]}`);
}
