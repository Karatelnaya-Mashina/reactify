Array.prototype.countOccurrences = function () {
	return this.length;
};
const arr = [1, 2, 3];
// console.log(arr.countOccurrences());

String.prototype.capitalize = function () {
	return this.charAt(0).toUpperCase() + this.slice(1);
};

let str = 'bbb';

// console.log(str.capitalize());

Number.prototype.isEven = function () {
	return this % 2 === 0;
};

let one = 1,
	two = 2;

// console.log(one.isEven());
// console.log(two.isEven());
Array.prototype.average = function () {
	let num = 0;
	for (n of this) {
		num += n;
	}
	return num / this.length;
};

const arr1 = [1, 2, 3];

console.log(arr1.average());

function example() {
	console.log(this);
}

example.call(1);
example.apply([1, 2, 3]);
const fBind = example.bind('a');
fBind();
