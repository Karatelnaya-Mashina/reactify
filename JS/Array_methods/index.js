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
	return (cardsPlayers[countryName] = player.name);
});

console.log(cardsPlayers);

// Task 3
console.log('Task 3');
let goalsCommand = 0;
const maxCommandGoals = teams
	.map(team => {
		let command = {};
		const teamPlayers = players
			.filter(player => player.teamId === team.id)
			.reduce((sum, player) => sum + player.goals, 0);
		command = { name: team.name, goals: teamPlayers };
		if (command.goals > goalsCommand) goalsCommand = command.goals;
		return command;
	})
	.find(max => max.goals === goalsCommand);

console.log(maxCommandGoals);

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

// Task 5
console.log('Task 5');

players.push({ id: 6, name: 'Чпок Пупок', teamId: 2, countryId: 4, goals: 50 });

console.log(players);

// Task 6 Найдите лучшего игрока каждой страны
console.log('------------------------------------------------');
console.log('Task 6');

const bestPlayersCounty = countries.map(country => {
	const teamPlayers = players.filter(player => player.countryId === country.id);
	const bestPlayerTeam = teamPlayers.reduce(
		(quantity, player) => (player.goals > quantity.goals ? player : quantity),
		teamPlayers[0]
	);
	return {
		country: country.name,
		name: bestPlayerTeam.name,
		goals: bestPlayerTeam.goals,
	};
});

console.log(bestPlayersCounty);

// Task 7 Создание отчета о командах и игроках
console.log('------------------------------------------------');
console.log('Task 7');

const teamsReport = teams.map(team => {
	const country = countries.find(country => country.id === team.countryId).name;
	const objTeamPlayers = players.filter(player => player.teamId === team.id);
	const totalTeamGoals = objTeamPlayers.reduce(
		(total, player) => player.goals + total,
		0
	);
	const teamPlayers = objTeamPlayers.map(player => player.name).join(', ');

	return {
		teamName: team.name,
		country: country,
		players: teamPlayers,
		totalGoals: totalTeamGoals,
	};
});

console.log(teamsReport);

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

// Управление базой данных сотрудников
console.log('Управление базой данных сотрудников');

const work = [
	{ name: 'Алексей', position: 'Разработчик', startYear: 2018 },
	{ name: 'Мария', position: 'Дизайнер', startYear: 2019 },
	{ name: 'Иван', position: 'Аналитик', startYear: 2020 },
];

// Task 1
// Добавление нового сотрудника
console.log('Task 1');

function addWorker(name, position, startYear) {
	work.push({
		name: name,
		position: position,
		startYear: startYear,
	});
	return work;
}
console.log(addWorker('Елена', 'Менеджер проектов', 2021));

// Task 2
// Поиск сотрудника по имени
console.log('Task 2');

const workerName = name => work.find(worker => worker.name === name);
console.log(workerName('Мария'));

// Task 3
// Обновление информации о сотруднике
console.log('Task 3');

const updateWorker = (name, position) => {
	const worker = work.find(work =>
		work.name === name ? (work.position = Object.values(position).join('')) : ''
	);
	return worker;
};

console.log(updateWorker('Иван', { position: 'Старший аналитик' }));

// Task 4
// Удаление сотрудника из базы данных
console.log('Task 4');

function isDeleteWorker(name) {
	const idWorker = work.findIndex(worker => worker.name === name);
	const isDeleteWorker = work.splice(idWorker, 1);
	return isDeleteWorker;
}

console.log(isDeleteWorker('Алексей'));

// Task 5 Вывод сотрудников, работающих в компании более N лет: Разработайте функцию, которая выводит список сотрудников, работающих в компании более определенного количества лет.
console.log('Task 5');
function listWorkingMoreThanNYears(year) {
	const currentDate = new Date().getFullYear();
	return work.filter(worker => currentDate - worker.startYear > year);
}

console.log(listWorkingMoreThanNYears(4));

// Поиск в массиве, связанные массивы
console.log('Поиск в массиве, связанные массивы');

const employees = [
	{ name: 'Иван', age: 34, profession: 'Разработчик' },
	{ name: 'Ольга', age: 40, profession: 'Тестировщик' },
	{ name: 'Алексей', age: 45, profession: 'Менеджер' },
];

const professions = [
	{ title: 'Разработчик', skills: ['JavaScript', 'React', 'Node.js'] },
	{ title: 'Тестировщик', skills: ['Selenium', 'Postman'] },
	{ title: 'Менеджер', skills: ['Управление', 'Agile', 'Scrum'] },
];

function findSkillsOfOldestDeveloper(employees, professions) {
	// Поиск разработчика
	const develop = employees.find(
		employee => employee.profession === 'Разработчик'
	);
	// Найти среди сотрудников всех, кто старше найденного разработчика по полю age.
	const allEmployeesOldDevelop = employees.filter(
		human => human.age > develop.age
	);
	// Определить профессию самого старшего среди найденных сотрудников.
	const oldEmployee = allEmployeesOldDevelop.reduce((old, employee) => {
		return old.age > employee.age ? old.profession : employee.profession;
	});
	// Найти профессию самого старшего и получить его навыки
	const professionOldEmployee = professions.find(profession =>
		profession.title === oldEmployee ? profession : ''
	).skills;
	return professionOldEmployee;
}

console.log(findSkillsOfOldestDeveloper(employees, professions));

// Обработка данных о погоде
console.log('Обработка данных о погоде');

const weatherData = [
	{ date: '2024-04-01', maxTemp: 20, minTemp: 10, description: 'солнечно' },
	{ date: '2024-04-02', maxTemp: 15, minTemp: 7, description: 'облачно' },
	{ date: '2024-04-03', maxTemp: 17, minTemp: 9, description: 'дождь' },
	{ date: '2024-04-04', maxTemp: 22, minTemp: 12, description: 'солнечно' },
	{ date: '2024-04-05', maxTemp: 18, minTemp: 8, description: 'облачно' },
];

// Анализ температур
// Task1
console.log('Task 1');

function calculateAverageTemperatures(temp) {
	const maxTemp =
		temp.reduce(
			(averageTemp, temperature) => averageTemp + temperature.maxTemp,
			0
		) / temp.length;
	const minTemp =
		temp.reduce(
			(averageTemp, temperature) => averageTemp + temperature.minTemp,
			0
		) / temp.length;

	return {
		maxAverageTemp: maxTemp,
		minAverageTemp: minTemp,
	};
}

console.log(calculateAverageTemperatures(weatherData));

// Поиск экстремальных дней
// Task 2
console.log('Task 2');

function findExtremeTemperatureDays(day) {
	const dayMinTemp = day.reduce(
		(temp, days) => (days.minTemp < temp ? days.minTemp : temp),
		day[0].minTemp
	);
	const dayMaxTemp = day.reduce(
		(temp, days) => (days.maxTemp > temp ? days.maxTemp : temp),
		day[0].maxTemp
	);
	return { maxTemp: dayMaxTemp, minTemp: dayMinTemp };
}

console.log(findExtremeTemperatureDays(weatherData));

// Классификация дней по погоде
// Task 3
console.log('Task 3');

function classifyWeatherDays(classDays) {
	let sunny = 0,
		cloudy = 0,
		rainy = 0;

	classDays.forEach(weather =>
		weather.description === 'солнечно'
			? sunny++
			: weather.description === 'облачно'
			? cloudy++
			: rainy++
	);
	return {
		'Солнечная погода': sunny,
		'Облачная погода': cloudy,
		'Дождливая погода': rainy,
	};
}

console.log(classifyWeatherDays(weatherData));

// Форматирование вывода
// Task 4
console.log('Task 4');

function formatWeatherData(report) {
	return report.map(
		infoFormat =>
			`Дата: ${infoFormat.date}, Макс. темп.: ${infoFormat.maxTemp}, Мин. темп.: ${infoFormat.minTemp}, Погода: ${infoFormat.description}`
	);
}

console.log(formatWeatherData(weatherData));

// Сортировка и агрегация данных
console.log('Сортировка и агрегация данных');

const transactions = [
	{ userID: 'user1', amount: 200, date: '2023-01-01' },
	{ userID: 'user2', amount: 500, date: '2023-01-02' },
	{ userID: 'user1', amount: 300, date: '2023-01-03' },
	{ userID: 'user3', amount: 400, date: '2023-01-01' },
	{ userID: 'user2', amount: 150, date: '2023-01-04' },
	{ userID: 'user3', amount: 250, date: '2023-01-02' },
	{ userID: 'user4', amount: 100, date: '2023-01-01' },
];

function topThreeUsersByTotalAmount(transactions) {
	// Сгруппировать транзакции по userID.
	let groupTransactionsById = {};
	const groupById = transactions.forEach(user => {
		if (!groupTransactionsById[user.userID])
			groupTransactionsById[user.userID] = 0;
		groupTransactionsById[user.userID] += user.amount;
	});

	// Для каждого пользователя вычислить общую сумму транзакций.
	const reportUserTransactions = Object.entries(groupTransactionsById).map(
		([userID, amount]) => {
			return { userID, amount };
		}
	);

	// Отсортировать пользователей по убыванию общей суммы транзакций.

	const sortUserTransaction = reportUserTransactions.sort(
		(a, b) => b.amount - a.amount
	);

	// Вывести топ-3 пользователя по общей сумме транзакций в формате

	const topThreeUser = sortUserTransaction.slice(0, 3);
	return topThreeUser;
}

console.log(topThreeUsersByTotalAmount(transactions));
