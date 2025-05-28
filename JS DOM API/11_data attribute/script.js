const productList = document.querySelectorAll('.product-list li');
const btnAddAttribute = document.getElementById('addAttribute');
const btnPriceIncrease = document.createElement('button');
const btnToggleAvailability = document.getElementById('toggleAvailability');
btnPriceIncrease.textContent = 'Увеличить цену';
document.body.insertBefore(btnPriceIncrease, btnAddAttribute);

productList.forEach(products => {
	products.addEventListener('click', function (product) {
		const productId = product.target.dataset.productId;
		const productPrice = product.target.dataset.price;
		console.log(`Id: ${productId}, Price: ${productPrice}`);
	});
});

btnPriceIncrease.addEventListener('click', function () {
	productList.forEach(products => {
		products.dataset.price = Number(products.dataset.price) + 100;
	});
});

btnAddAttribute.addEventListener('click', function () {
	productList.forEach(products => {
		if (!products.dataset.dataAvailable) {
			products.dataset.dataAvailable = 'true';
			if (!products.textContent.includes('Доступен')) {
				const newText = products.textContent.slice(0) + ` Доступен`;
				products.textContent = newText;
			}
		}

		if (products.textContent.includes('Недоступен')) {
			products.dataset.dataAvailable = 'true';
			const newText = products.textContent.replace(` Недоступен`, ` Доступен`);
			products.textContent = newText;
		}
	});
});

btnToggleAvailability.addEventListener('click', function () {
	productList.forEach(products => {
		if (products.dataset.dataAvailable === 'true') {
			products.dataset.dataAvailable = 'false';
			const newText = products.textContent.replace(` Доступен`, ` Недоступен`);
			products.textContent = newText;
		} else if (products.dataset.dataAvailable === 'false') {
			products.dataset.dataAvailable = 'true';
			const newText = products.textContent.replace(` Недоступен`, ` Доступен`);
			products.textContent = newText;
		}
	});
});
