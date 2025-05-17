function multiply() {
	for (let i = 0; i < arguments.length; i++) {
		console.log(arguments[i] ** 2);
	}
}

multiply(1, 2, 3, 4);

function concatStrings(privet, ...names) {
	names.forEach(name => console.log(`${privet} ${name}`));
}
concatStrings('Привет', 'Иван', 'Мария', 'Алексей');

function combineArrays(arr, arr1) {
	return [...arr, ...arr1];
}
console.log(combineArrays([1, 2, 3], ['a', 'b', 'c']));

function copyObject(obj) {
	return { ...obj, skill: 'Povar' };
}

console.log(copyObject({ name: 'Ivan', age: 30 }));
