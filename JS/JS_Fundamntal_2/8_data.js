// Task 1
console.log('Task 1');

let d = new Date(2025, 9, 1);

function timeEnd(a) {
	let dT = new Date();
	return (a - dT) / (1000 * 60 * 60 * 24);
}

console.log(timeEnd(d).toFixed(0));

// Task 2
console.log('-----------------');
console.log('Task 2');

function timeDifference(a, b) {
	let difference = a.getTime() - b.getTime();
	let day = Math.floor(difference / (1000 * 60 * 60 * 24));
	let hours = Math.floor(
		(difference - day * (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	let minutes =
		(difference - day * (1000 * 60 * 60 * 24) - hours * (1000 * 60 * 60)) /
		(1000 * 60);
	let result = {
		day: day,
		hours: hours,
		minutes: minutes,
	};
	return result;
}

let dataOne = new Date(2025, 11, 31, 22, 30, 3, 0);
let dataTwo = new Date(2025, 9, 1, 0, 0, 0, 0);

console.log(timeDifference(dataOne, dataTwo));

// Task 3
console.log('-----------------');
console.log('Task 3');

function timer(a) {
	let difference = a - Date.now();
	let hours = Math.floor(difference / (1000 * 60 * 60));
	let minutes = Math.floor(
		(difference - hours * (1000 * 60 * 60)) / (1000 * 60)
	);
	let seconds = (
		(difference - hours * (1000 * 60 * 60) - minutes * (1000 * 60)) /
		1000
	).toFixed(0);
	let result = `${hours}:${minutes}:${seconds}`;
	return result;
}

const newYear = new Date(2026, 0, 1, 3, 0, 0);

console.log(timer(newYear));

// Task 4
console.log('-----------------');
console.log('Task 4');

function timerNewYear(a) {
	let difference = a - Date.now();
	let day = Math.floor(difference / (1000 * 60 * 60 * 24));
	return day;
}

console.log(timerNewYear(newYear));

// Task 5
console.log('-----------------');
console.log('Task 5');

let toDayTime = new Date().toTimeString();

console.log(toDayTime);
