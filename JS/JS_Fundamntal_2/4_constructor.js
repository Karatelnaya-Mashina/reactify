// Task 1
let user1 = { address: { street: 'Main Street' } };
let user2 = {}; // пользователь без адреса
function getStreet(user) {
	return user?.address?.street ?? 'Улица не указана';
}
console.log(getStreet(user1)); // "Main Street"
console.log(getStreet(user2)); // "Улица не указана"

// Task 2
let user3 = {
	sayHi() {
		console.log('Привет!');
	},
};
let user4 = {}; // пользователь без метода sayHi
function greetUser(user) {
	return user?.sayHi?.();
}
greetUser(user3); // "Привет!"
greetUser(user4); // ничего не происходит

// Task 3
function User(name, isAdmin = false) {
	this.sayHi1 = () => {
		console.log(`Привет, меня зовут ${name}`);
	};
}
let user5 = new User('Alice');
let user6 = new User('Bob', true);
user5.sayHi1(); // "Привет, меня зовут Alice"
user6.sayHi1(); // "Привет, меня зовут Bob"

// Task 4
let calculator = {
	result: 0,
	add(value) {
		this.result += value;
	},
	subtract(value) {
		this.result -= value;
	},
	getResult() {
		return this.result;
	},
};
calculator.add(5);
calculator.subtract(3);
console.log(calculator.getResult()); // 2

//Task 5
let user = { name: 'John' };
// Пример использования:
function getUserName(users) {
	return users?.name ?? 'Имя неизвестно';
}

console.log(getUserName(user)); // "John"
console.log(getUserName(null)); // "Имя неизвестно"

//Task 6
let users1 = { addresses: [{ city: 'New York' }] };
let users2 = { addresses: [] };
let users3 = {}; // пользователь без адресов
function getCity(user) {
	return user?.addresses?.[0]?.city ?? 'Город не указан';
}
console.log(getCity(users1)); // "New York"
console.log(getCity(users2)); // "Город не указан"
console.log(getCity(users3)); // "Город не указан"

//Task 7
let user7 = { name: 'Alice', age: 30 };
function deleteAge(user) {
	return delete user.age;
}
deleteAge(user7);
console.log(user7); // { name: "Alice" }
