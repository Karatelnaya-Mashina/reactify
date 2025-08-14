import { filmApi } from '../api/api.js';
import {
	capitalizeGenres,
	getBannerSearchImg,
	getBackgroundToElement,
} from '../utils/utils.js';
import {
	renderBannerHeaderPopular,
	renderFilmInfo,
	renderBannerButtons,
	renderModalHeader,
	renderModalButtons,
	renderModalInfo,
} from '../templates/templates.js';

export function popularModule(state, actions) {
	const popular = document.getElementById('popular');
	const boxPopular = document.querySelector('.modal__box-search');

	async function formCallback() {
		const data = await filmApi.getFetchPopularMovies(state.index);

		actions.setPopularFilm(data.dataPopular);
		actions.setPopularListData(data.filmsListPopular);

		renderPopularFilms();
	}
	formCallback();

	const renderPopularFilms = () => {
		popular.innerHTML = markupPopular();

		const popularBackground = document.querySelector('.popular__banner');
		getBackgroundToElement(popularBackground, state.dataPopular.posterUrl);

		boxPopular.innerHTML = markupPopularModal();
		getBackgroundToElement(boxPopular, state.dataPopular.posterUrl);
	};

	const markupPopular = () => {
		const { nameRu, description, year, ratingImdb } = state.dataPopular;
		const bannerPopular = getBannerSearchImg(state.filmsListPopular);

		const next = state.filmsListPopular.length - 1 !== state.index;
		const prev = state.index !== 0;

		return `
		<div class="popular__container container">
			<scroll-slider>
					${renderBannerHeaderPopular(prev, next)}
				<scroll-slider-track class="popular__collection">
					${bannerPopular}
				</scroll-slider-track>
			</scroll-slider>
			<div class="popular__banner">
				${renderFilmInfo(nameRu, ratingImdb, year, description)}
				${renderBannerButtons()}
			</div>
        </div>`;
	};

	const markupPopularModal = () => {
		const {
			nameRu,
			description,
			year,
			ratingImdb,
			genres,
			countries: {
				0: { country },
			},
		} = state.dataPopular;

		const genresList = capitalizeGenres(genres);

		return `
			${renderModalHeader(nameRu)}
			<div class="modal__wrapper">
				<div class="modal__genres">
					${genresList}
				</div>
				${renderModalButtons()}
			</div>
			${renderModalInfo(ratingImdb, year, country)}
			<p>
				${description}
			</p>
		`;
	};
}
