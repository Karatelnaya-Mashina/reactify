const taskContainer = document.getElementById('taskContainer');

const fragment = document.createDocumentFragment();

for (let i = 1; i <= 1000; i++) {
	const newBox = document.createElement('div');
	newBox.classList.add('task');
	newBox.textContent = `Task ${i}`;
	fragment.appendChild(newBox);
}

taskContainer.appendChild(fragment);
taskContainer.addEventListener('click', function (e) {
	if (e.target.matches('.task')) {
		console.log(e.target.textContent);
	}
});

// Функция throttle
function throttle(func, limit) {
	let lastFunc = false;

	return (...arg) => {
		if (lastFunc) return;

		func(...arg);
		lastFunc = true;

		setTimeout(() => {
			lastFunc = false;
		}, limit);
	};
}

function logClick() {
	console.log('Button clicked!');
}
