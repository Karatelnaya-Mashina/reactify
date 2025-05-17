const Vehicle = {
	start() {
		console.log('lets go!');
	},
	stop() {
		console.log('Stope zolushka!');
	},
};

const Car = {
	drive() {
		console.log('Edem v sosednee selo');
	},
};

Car._proto_ = Vehicle;

const animal = {
	eat() {
		console.log('This animal eats food');
	},
	sleep() {
		console.log('This animal sleeps');
	},
};

const dog = {
	bark() {
		console.log('Woof!');
	},
};
dog._proto_ = animal;

let car1 = {
	startEngine() {
		console.log('Engine started');
	},
	stopEngine() {
		console.log('Engine stopped');
	},
};

let electricCar = Object.create(car1);
electricCar.chargeBattery = function () {
	console.log('Battery charging...');
};

electricCar.startEngine();
electricCar.stopEngine();
electricCar.chargeBattery();

const book = {
	title: 'pup',
};
const ebook = Object.create(book);
ebook.format = 'phone';

console.log(book.title);
console.log(ebook.title);
console.log(ebook.format);

console.log(ebook.hasOwnProperty('title'));
console.log(ebook.hasOwnProperty('format'));
console.log(book.hasOwnProperty('title'));

console.log('title' in book);
console.log('title' in ebook);
console.log('format' in ebook);
