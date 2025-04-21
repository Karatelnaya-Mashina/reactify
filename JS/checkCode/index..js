function expandedForm(num) {
	let numStr = num.toString();
	let arr = [];

	for (let i = 0; i < numStr.length; i++) {
		const digit = numStr[i];
		const placeValue = Math.pow(10, numStr.length - i - 1);

		if (digit !== '0') {
			arr.push(digit * placeValue);
		}
	}

	return arr.join(' + ');
}

console.log(expandedForm(70304));
