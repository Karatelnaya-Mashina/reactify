let jsonObj = {
	name: 'Alice',
	age: 30,
	hobbies: ['reading', 'biking', 'cooking'],
	isStudent: false,
};

jsonObj.age = 31;
jsonObj.hobbies.push('programming');

let jsonString = JSON.stringify(jsonObj);
console.log(jsonString);

const person = {
	name: 'Bob',
	age: 25,
	greet: `function () {
		console.log('Hello!');
	}`,
	address: {
		city: 'New York',
		zip: '10001',
	},
};

let personStringJson = JSON.stringify(person);
console.log(personStringJson);

// JSON не преобразует специальные типы данных (function, Date и тд)

const book = {
	title: 'JavaScript: The Good Parts',
	author: 'Douglas Crockford',
	details: {
		publisher: "O'Reilly Media",
		pages: 176,
	},
	tags: ['JavaScript', 'Programming', 'Web Development'],
};

let copyBook = JSON.parse(JSON.stringify(book));

copyBook.title = 'JavaScript: The Definitive Guide';
copyBook.details.pages = 1096;

console.log(book);
console.log(copyBook);

const user = {
	id: 1,
	username: 'johndoe',
	password: 'supersecretpassword',
	email: 'johndoe@example.com',
};

function serializationsUser(user) {
	return JSON.stringify(user, (user.password = undefined));
}
console.log(serializationsUser(user));
