// let p = new Promise(resolve => {
// 	resolve('Операция завершена');
// });

// p.then(data => {
// 	setTimeout(() => {
// 		console.log(data);
// 	}, 2000);
// });

// let p2 = new Promise((resolve, reject) => {
// 	if (false) {
// 		resolve('Операция завершена');
// 	} else {
// 		reject('Ошибка');
// 	}
// });
// p2.then(data => {
// 	console.log(data);
// }).catch(error => console.error(error));

// function oneStep() {
// 	return new Promise(resolve => {
// 		setTimeout(() => resolve('One step'), 1000);
// 	});
// }

// function twoStep(data) {
// 	return new Promise(resolve => {
// 		setTimeout(() => resolve(data + ' Two step'), 2000);
// 	});
// }

// function threeStep(data) {
// 	return new Promise(resolve => {
// 		setTimeout(() => resolve(data + ' Three step'), 3000);
// 	});
// }

// oneStep()
// 	.then(data => {
// 		console.log(data);
// 		return twoStep(data);
// 	})
// 	.then(data => {
// 		console.log(data);
// 		return threeStep(data);
// 	})
// 	.then(data => console.log(data))
// 	.catch(error => console.error(error));

// function delay(ms) {
// 	return new Promise(resolve => {
// 		setTimeout(() => {
// 			resolve('Done');
// 		}, ms);
// 	});
// }

// delay(1000).then(data => console.log(data));

// let p3 = new Promise(resolve => {
// 	resolve('Step 1');
// });

// p3.then(data => {
// 	console.log(data);
// 	throw new Error('saassa');
// })
// 	.catch(error => console.error(error))
// 	.finally(() => console.log('цепочка завершена'));
