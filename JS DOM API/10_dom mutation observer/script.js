const itemList = document.getElementById('itemList');
const addBtn = document.getElementById('addItemBtn');
const changeFirstItemBtn = document.getElementById('changeFirstItemBtn');
const logArea = document.getElementById('logArea');
const elements = itemList.querySelector('li');
const config = {
	characterData: true,
	childList: true,
};

const observer = new MutationObserver(mutationList => {
	mutationList.forEach(mutation => {
		if (mutation.type === 'childList' || mutation.type === 'characterData') {
			logArea.textContent = mutation.target.textContent;
		}
	});
});
observer.observe(itemList, config);
observer.observe(elements, config);

addBtn.addEventListener('click', function () {
	const newElement = document.createElement('li');
	newElement.textContent = `Элемент ${itemList.children.length + 1}`;
	itemList.appendChild(newElement);
});

changeFirstItemBtn.addEventListener('click', function () {
	elements.textContent = 'Item 1';
});

setTimeout(() => {
	observer.disconnect();
	console.log('disconnect');
}, 30000);
