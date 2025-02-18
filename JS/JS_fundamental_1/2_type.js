//Строки к числу
console.log('5' - 3); // 2
console.log('5' * 2); // 10
console.log('10' / 2); // 5
console.log('10' % 3); // 1
console.log(+'42' + 8); // 50
console.log('5' + 3); // 53 type string
console.log(3 + '5'); // 35 type string

//Boolean к числу
console.log(true + 1); // 2
console.log(false + 1); // 1

//null к числу
console.log(null + 5); // 5
console.log(null == 0); // false

// //undefined к числу
console.log(undefined + 10); //  NaN
console.log(Number(undefined)); //  NaN

// //приведение к boolean типу
console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean(' ')); // true
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false

console.log(!!'hello'); // true
console.log(!!''); //false
console.log(!!1); // true
console.log(!!0); // false
console.log(!!null); // false

//сравнение
console.log(10 > '5'); // true
console.log('10' < 5); // false
console.log('2' > 1); // true
console.log(5 >= '5'); // true
console.log(5 == '5'); // true
console.log(5 === '5'); // false
console.log(true == 1); // true
console.log(true === 1); // false

console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log(NaN > 0); // false
console.log(NaN <= 0); // false

console.log(true > false); // true
console.log(false < 1); // true
console.log(true == 1); // true
console.log(false == 0); // true

console.log(null > 0); // false
console.log(null >= 0); // true
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(undefined > 0); // false

console.log(0 == '0'); // true
console.log(0 === '0'); // false
console.log(false == '0'); // true
console.log(false === '0'); // false
