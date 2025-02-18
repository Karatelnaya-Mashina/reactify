{
	let x = 5;
	let y = 3;

	console.log(x + y); // 8
	console.log(x - y); // 2
	console.log(x * y); // 15
	console.log(x / y); // 1
	console.log(x % y); // 2
}

{
	let a = 10;
	let b = a++;

	console.log(a); // 11
	console.log(b); // 10
}

{
	let c = 5;
	let d = ++c;

	console.log(c); // 6
	console.log(d); // 6
}

{
	let x = 10;

	x += 5;
	console.log(x); // 15

	x -= 3;
	console.log(x); // 12

	x *= 2;
	console.log(x); // 24

	x /= 4;
	console.log(x); // 6
}

{
	let a = 2;
	let b = 3;
	let result = a + b * a - b;

	console.log(result); // 5
}

{
	let x = 5;
	let y = (x = x * 2);

	console.log(x); // 10
	console.log(y); // 10
}
