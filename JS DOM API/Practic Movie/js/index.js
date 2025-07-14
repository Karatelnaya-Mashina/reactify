import ScrollSlider from './scroll-slider.js';
import ScrollSliderTrack from './scroll-slider-track.js';
import ModalWindow from './modal.js';

import { fetchMovies } from './preview.js';

// Вкл. поисковика
function showSearch() {
	const search = document.getElementById('search');
	search.classList.toggle('visually-hidden');
}
document.getElementById('search-btn').addEventListener('click', showSearch);


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
