import { useState } from 'react';

const movies = [
	{ id: 1, title: 'Inception', year: 2010, rating: 9, watched: false },
	{ id: 2, title: 'Interstellar', year: 2014, rating: 8, watched: true },
];

export default function MoviesList() {
	const [movie, setMovie] = useState(movies);
	const [value, setValue] = useState('');

	function addMovie(e) {
		e.preventDefault();
		if (!value.trim()) return;
		setMovie([
			...movie,
			{
				id: Date.now(),
				title: value,
				year: null,
				rating: null,
				watched: false,
			},
		]);
		setValue('');
	}

	function btnDeleteMovie(id) {
		setMovie(movie.filter(movie => movie.id !== id));
	}

	return (
		<>
			<form onSubmit={addMovie}>
				<input
					onChange={e => setValue(e.target.value)}
					type='text'
					placeholder={'Добавьте фильм'}
					value={value}
				/>
				<button type='Submit'>Добавить</button>
			</form>
			<ul>
				{movie.map(el => (
					<li key={el.id}>
						{el.title}
						<button onClick={() => btnDeleteMovie(el.id)}>✖️</button>
					</li>
				))}
			</ul>
		</>
	);
}
