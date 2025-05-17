function Person(name) {
	this.name = name;
}
Person.prototype.greet = function () {
	console.log(`Hello ${this.name}`);
};

const Alice = new Person('Alice');
const Petr = new Person('Petr');
const Misha = new Person('Misha');

Alice.greet();
Petr.greet();
Misha.greet();

function Vehicle(type) {
	this.type = type;
}

Vehicle.prototype = {
	drive: function () {
		console.log('BiBip');
	},
};

let car2 = new Vehicle('BMW');
Vehicle.prototype.constructor = Vehicle;
console.log(car2.constructor === Vehicle);

Array.prototype.first = function () {
	return this[0];
};

const arr = [1, 2, 3, 4];
console.log(arr.first());

const phone = {
	call: function () {
		console.log('call');
	},
};

const smartphone = Object.create(phone);
smartphone.call();
console.log(Object.isPrototypeOf(smartphone));
