function introduce() {
	console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
}

const user1 = {
	name: 'Ivan',
	age: 30,
};
const user2 = {
	name: 'Igor',
	age: 25,
};
introduce.call(user1);
introduce.call(user2);

const person1 = { name: 'Alice' };
const person2 = { name: 'Bob' };

function sum(a, b, c) {
	console.log(a + b + c);
}

sum.apply(0, [1, 2, 3]);

function calculator(a, b) {
	return a * b;
}
const multiplyBy5 = calculator.bind(0, 5);
console.log(multiplyBy5(10)); // 50
console.log(multiplyBy5(4)); // 20
