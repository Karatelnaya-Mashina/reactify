import ProductCard from './ProductCard.jsx';

const products = [
	{ id: 1, name: 'Laptop', price: 999 },
	{ id: 2, name: 'Smartphone', price: 699 },
	{ id: 3, name: 'Tablet', price: 399 },
];

export default function ProductList() {
	return (
		<ul className='product-card'>
			{products.map(product => (
				<ProductCard
					key={product.id}
					name={product.name}
					price={product.price}
				/>
			))}
		</ul>
	);
}
