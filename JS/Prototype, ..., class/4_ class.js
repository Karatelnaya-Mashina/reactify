class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	introduce() {
		console.log(`Меня зовут ${this.name}, мне ${this.age} лет.`);
	}
}

const Alice = new Person('Alice', 25);
Alice.introduce();

class Animal {
	constructor(beast) {
		this.beast = beast;
	}
	speak() {
		console.log(`${this.beast} издает звук.`);
	}
}

const dog = new Animal('Shpic');
dog.speak();

class Bird extends Animal {
	speak() {
		console.log(`${this.beast} чирикает.`);
	}
}

const lastochka = new Bird('Lastochka');
lastochka.speak();

console.log(dog instanceof Animal);
console.log(dog instanceof Bird);

class Rectangle {
	constructor(height, width) {
		this._height = height;
		this._width = width;
	}
	get area() {
		return this._height * this._width;
	}
	set width(value) {
		if (value <= 0) {
			console.log('Ширина должна быть больше 0');
		}
		this._width = value;
	}
	set height(value) {
		if (value <= 0) {
			console.log('Высота должна быть больше 0');
		}
		this._height = value;
	}
}

const square = new Rectangle(5, 5);
console.log(square.area);
square.height = 0;
console.log(square.area);
