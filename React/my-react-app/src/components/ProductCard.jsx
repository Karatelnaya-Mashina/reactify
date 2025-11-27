export default function ProductCard({ name, price }) {
	return (
		<li>
			<h3>{name}</h3>
			<p>Цена: {price} руб.</p>
		</li>
	);
}
