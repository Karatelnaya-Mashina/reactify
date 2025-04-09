let arr = [1, 2, 3, 4, 5];
let result = arr.map(x => x ** 2);
console.log(result);

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result1 = arr1.filter(x => x % 2 === 0);
console.log(result1);

let arr2 = [1, 2, 3, 4, 5];
let result2 = arr2.reduce((x, y) => x + y, 0);

console.log(result2);

let users = [
	{ name: 'Anna', age: 25 },
	{ name: 'Boris', age: 30 },
	{ name: 'Cathy', age: 22 },
];

users.sort((x, y) => x.age - y.age);

console.log(users);

let arr3 = ['apple', 'banana', 'orange', 'apple', 'grape', 'banana'];
let result3 = [];
arr3.forEach(x => (result3.includes(x) ? '' : result3.push(x)));
console.log(result3);

console.log('----------------------------------------');
// Управление футболом
console.log('Управление футболом');

const players = [
	{ id: 1, name: 'Лионель Месси', teamId: 1, countryId: 1, goals: 30 },
	{ id: 2, name: 'Криштиану Роналду', teamId: 2, countryId: 2, goals: 25 },
	{ id: 3, name: 'Неймар', teamId: 3, countryId: 3, goals: 20 },
	{ id: 4, name: 'Килиан Мбаппе', teamId: 3, countryId: 4, goals: 22 },
	{ id: 5, name: 'Златан Ибрагимович', teamId: 4, countryId: 5, goals: 15 },
];
const teams = [
	{ id: 1, name: 'ПСЖ', countryId: 3 },
	{ id: 2, name: 'Манчестер Юнайтед', countryId: 2 },
	{ id: 3, name: 'Барселона', countryId: 1 },
	{ id: 4, name: 'Милан', countryId: 5 },
];
const countries = [
	{ id: 1, name: 'Аргентина' },
	{ id: 2, name: 'Португалия' },
	{ id: 3, name: 'Франция' },
	{ id: 4, name: 'Бразилия' },
	{ id: 5, name: 'Швеция' },
];

// Task 1
console.log('Task 1');

const namePlayers = players.map(user => user.name);
console.log(namePlayers);

// Task 2
console.log('Task 2');

const teamId = teams.find(team => team.name === 'ПСЖ').id;
const psgPlayers = players.filter(player => player.teamId === teamId);
console.log(psgPlayers);

// Task 3
console.log('Task 3');

const argentinaId = countries.find(country => country.name === 'Аргентина').id;
const argentinaPlayer = players.some(
	player => player.countryId === argentinaId
);
console.log(argentinaPlayer);

// Task 4
console.log('Task 4');

const totalGoals = players.reduce((total, player) => player.goals + total, 0);
console.log(totalGoals);

// Task 5
console.log('Task 5');

const infoPlayer = players
	.map(player => {
		const team = teams.find(team => team.id === player.teamId).name;
		return `${player.name} (${team})`;
	})
	.join(', ');
console.log(infoPlayer);

console.log('----------------------------------------');
// Самостоятельные задачи
console.log('Самостоятельные задачи');

// Task 1
console.log('Task 1');

const arrGoals = players.map(goal => goal.goals).sort((a, b) => b - a);
console.log(arrGoals);

// Task 2
console.log('Task 2');

const cardsPlayers = {};
const playersId = players.map(player => {
	const countryName = countries.find(
		country => country.id === player.countryId
	).name;
	return (cardsPlayers[countryName] = Object.values(player));
});

console.log(cardsPlayers);

// Task 3
console.log('Task 3');
let maxGoals = 0;
const commandGoals = teams.map(team => {
	let command = {};
	const teamPlayers = players
		.filter(player => player.teamId === team.id)
		.reduce((sum, player) => sum + player.goals, 0);
	command = { name: team.name, goals: teamPlayers };
	return command;
});
const goalsTotal = commandGoals.forEach(count => {
	if (count.goals > maxGoals) maxGoals = count.goals;
});
const totalCommandGoals = commandGoals.find(
	command => command.goals === maxGoals
);

console.log(totalCommandGoals);

// Task 4
console.log('Task 4');

function countriesId(id) {
	const team = teams.filter(team => team.countryId === id);
	const teamPlayers = players.forEach(player => {
		if (player.teamId === team[0].id) {
			console.log(`Игрок: ${player.name}. Команда: ${team[0].name}`);
		}
	});
}

countriesId(1);

players.push({ id: 6, name: 'Чпок Пупок', teamId: 2, countryId: 4, goals: 50 });

console.log(players);

// Управление данными о фильмах

const movies = [
	{
		title: 'Звёздные войны',
		year: 1977,
		genre: 'Фантастика',
		rating: 8.6,
		duration: 120,
	},
	{
		title: 'Назад в будущее',
		year: 1985,
		genre: 'Фантастика',
		rating: 8.5,
		duration: 140,
	},
	{
		title: 'Терминатор',
		year: 1984,
		genre: 'Боевик',
		rating: 8.0,
		duration: 110,
	},
	{
		title: 'Интерстеллар',
		year: 2014,
		genre: 'Фантастика',
		rating: 8.6,
		duration: 80,
	},
	{
		title: 'Властелин колец',
		year: 2001,
		genre: 'Фэнтези',
		rating: 8.8,
		duration: 75,
	},
];

// Task 1
console.log('Task 1');

const allFilms = movies.map(movie => movie.title);
console.log(allFilms);

// Task 2
console.log('Task 2');

let arrFilms = [];
const genre = movies.filter(genre => {
	if (genre.genre === 'Фантастика') {
		arrFilms.push(genre.title);
	}
});
console.log(arrFilms);

// Task 3
console.log('Task 3');
const year = movies.find(year => year.year === 1984).title;
console.log(year);

// Task 4
console.log('Task 4');

const allTime = movies.reduce((sum, time) => time.duration + sum, 0);
console.log(allTime);

// Task 5
console.log('Task 5');

const movie = movies.forEach(movie =>
	console.log(`${movie.title} (${movie.year})`)
);

// Task 6
console.log('Task 6');

movies.push({
	title: 'Матрица',
	year: 1999,
	genre: 'Фантастика',
	rating: 8.7,
	duration: 110,
});

console.log(movies.at(-1));

// Task 7
console.log('Task 7');
const updateArr = movies.filter(movie => movie.title !== 'Терминатор');
console.log(updateArr);

// Task 8
console.log('Task 8');

const updateMovie = movies.find(movie => {
	if (movie.title === 'Интерстеллар') {
		movie.rating = 8.7;
	}
});
console.log(movies);

// Task 9
console.log('Task 9');

const sortMovies = movies.slice().sort((a, b) => a.year - b.year);
console.log(sortMovies);

// Task 10
console.log('Task 10');

const uniqueGenre = movies.reduce((unique, movie) => {
	if (!unique.includes(movie.genre)) {
		unique.push(movie.genre);
	}
	return unique;
}, []);

console.log(uniqueGenre);

// Task 11
console.log('Task 11');
const indexMovie = movies.findIndex(movie => movie.title === 'Терминатор');
const isDelete = movies.splice(indexMovie, 1);
console.log(isDelete);

// Task 12
console.log('Task 12');
const replacementMovies = movies.splice(
	1,
	2,
	{ title: 'Чужой', year: 1979, genre: 'Ужасы', rating: 8.5 },
	{ title: 'Бегущий по лезвию', year: 1982, genre: 'Фантастика', rating: 8.1 }
);

console.log(movies);
