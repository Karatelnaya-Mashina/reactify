import ScrollSlider from './scroll-slider.js';
import ScrollSliderTrack from './scroll-slider-track.js';

// Вкл. поисковика
function showSearch() {
	const search = document.getElementById('search');
	search.classList.toggle('visually-hidden');
}
document.getElementById('search-btn').addEventListener('click', showSearch);

// Модальное окно профиля
const btnOpenModal = document.querySelector('#profile');
const modal = document.querySelector('.modal__profile');
const modalBtn = document.querySelector('.modal__btn-profile');

btnOpenModal.addEventListener('click', function () {
	modal.classList.add('open');
});
modalBtn.addEventListener('click', function () {
	modal.classList.remove('open');
});

// Закрыть окно при нажатии ESC
window.addEventListener('keydown', e => {
	if (e.key === 'Escape') {
		modal.classList.remove('open');
	}
});

// Закрыть окно при клике вне его
document
	.querySelector('#modal .modal__box-profile')
	.addEventListener('click', e => [(e._isClickWithInModal = true)]);
modal.addEventListener('click', e => {
	if (e._isClickWithInModal) return;
	e.currentTarget.classList.remove('open');
});

// const KEY_API = 'BTRBF0G-Z4B4NNJ-GH1044H-2TJFWHP';
// const test =
// 	'https://api.kinopoisk.dev/v1.4/movie?page=1&limit=100&notNullFields=backdrop.url';

// const options = {
// 	method: 'GET',
// 	headers: {
// 		accept: 'application/json',
// 		'X-API-KEY': KEY_API,
// 	},
// };

// let dataPreview = {
// 	name: 'Зеленая миля',
// 	description:
// 		'американский фэнтезийный драматический фильм 1999 года режиссёра и сценариста Фрэнка Дарабонта, основанный на одноимённом романе Стивена Кинга. В главной роли Том Хэнкс. Фильм рассказывает о тюремном надзирателе за приговорёнными к смертной казни во время Великой депрессии, который является свидетелем сверхъестественных событий после прибытия в его учреждение загадочного заключённого (Майкл Кларк Дункан). Дэвид Морс, Бонни Хант, Сэм Рокуэлл и Джеймс Кромвелл появляются во второстепенных ролях.',
// 	year: 1999,
// 	countries: {
// 		0: { name: 'USA' },
// 	},
// };

// // Запросы
// async function fetchMovies(url) {
// 	try {
// 		const response = await fetch(url, options);
// 		const data = await response.json();
// 		const { name, description, year, countries } = data.docs[id];
// 		dataPreview = { ...dataPreview, name, description, year, countries };
// 		return data;
// 	} catch (error) {
// 		console.error('Error >>>', error.message);
// 	}
// }

// // Превью
// function posterMovie(id) {
// 	const data = fetchMovies(test);
// 	const headerPreview = document.getElementById('preview');

// 	data.then(resolve => {
// 		console.log(resolve);

// 		const backgroundImage = poster.previewUrl;
// 		headerPreview.setAttribute(
// 			'style',
// 			`background: url(${backgroundImage}) center/ cover no-repeat; `
// 		);
// 	});
// }
// posterMovie(3);

// function markup(id) {
// 	const data = fetchMovies(test);
// 	const { name, description, year, countries } = dataPreview;
// 	console.log(name, description, year, countries);
// }
// markup(3);
