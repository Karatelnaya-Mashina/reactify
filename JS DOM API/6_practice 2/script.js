const products = [
	{
		title: 'Product 1',
		description: 'Description of Product 1',
		imageUrl: 'https://via.placeholder.com/100',
		buttonText: 'Buy Now',
	},
	{
		title: 'Product 2',
		description: 'Description of Product 2',
		imageUrl: 'https://via.placeholder.com/100',
		buttonText: 'Buy Now',
	},
	{
		title: 'Product 3',
		description: 'Description of Product 3',
		imageUrl: 'https://via.placeholder.com/100',
		buttonText: 'Buy Now',
	},
];

const productsSection = document.getElementById('products-section');
const productsHTML = `
	<div class="container products__container">
		<h2 class="products__title">Our Products</h2>
		<ul class="products__list">
			${products
				.map(
					product => `
						<li class="products__item">
							<article class="product-card">
								<div class="product-card__info">
									<img class="product-card__image" src="${product.imageUrl}" alt="${product.title}"/>
									<h4 class="product-card__title">${product.title}</h4>
									<p class="product-card__description">${product.description}</p>
								</div>
								<button class="product-card__button">${product.buttonText}</button>
							</article>
						</li>`
				)
				.join('')}
		</ul>
	</div>
	`;

productsSection.innerHTML = productsHTML;
