const HobbiesList = ['Cooking', 'Fitness', 'Run', 'Auto'];

export default function Hobby() {
	return (
		<ul>
			{HobbiesList.map(hobby => (
				<li key={hobby}>{hobby}</li>
			))}
		</ul>
	);
}
