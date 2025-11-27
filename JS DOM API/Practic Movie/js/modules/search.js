import { filmApi } from '../api/api.js';
import {
	capitalizeGenres,
	getBannerSearchImg,
	getBackgroundToElement,
} from '../utils/utils.js';
import {
	renderBannerHeader,
	renderFilmInfo,
	renderBannerButtons,
	renderModalHeader,
	renderModalButtons,
	renderModalInfo,
} from '../templates/templates.js';

export function searchModule(state, actions) {
	const searchButton = document.getElementById('search-btn');
	const formSearch = document.querySelector('.header__wrap form');
	const modalSearch = document.querySelector('.modal__box-search');
	const searchInput = document.getElementById('search');
	const value = searchInput.value;

	searchButton.addEventListener('click', () => showSearch());

	function showSearch() {
		searchInput.classList.toggle('visually-hidden');
		searchInput.focus();
	}

	formSearch.addEventListener('submit', formCallback);

	async function formCallback(e) {
		e.preventDefault();

		if (searchInput.value === '') {
			restoreOriginal();
			return;
		}

		if (searchInput.value) {
			const data = await filmApi.getSearchedFilms(
				searchInput.value,
				state.index
			);

			actions.setSearchFilm(data.filmData);
			actions.setSearchListData(data.filmsListData);

			renderSearchedFilms();
		}
	}

	function renderSearchedFilms() {
		if (!state.original) {
			actions.setOrigin(main.innerHTML);
		}

		main.innerHTML = renderSearchBanner();

		const bannerFilm = document.querySelector('.popular__banner');
		const nextBtn = document.querySelector('scroll-slider-btn-next');
		const prevBtn = document.querySelector('scroll-slider-btn-prev');

		assignBackground(bannerFilm, state.searchFilm.posterUrl);

		assignBackground(modalSearch, state.searchFilm.posterUrl);

		if (nextBtn) {
			nextBtn.addEventListener('click', e => {
				e.preventDefault();
				showFilmByDirection(1);
			});
		}

		if (prevBtn) {
			prevBtn.addEventListener('click', e => {
				e.preventDefault();
				showFilmByDirection(-1);
			});
		}

		modalSearch.innerHTML = markupSearchModal(state.searchFilm);
	}

	const renderSearchBanner = () => {
		const { nameRu, description, year, rating } = state.searchFilm;
		const bannerSearch = renderBannerSearchImg(state.searchListData);
		const next = state.searchListData.length - 1 !== state.index;
		const prev = state.index !== 0;

		return `<div class="popular__container container">
					<scroll-slider>
					${renderBannerHeader(prev, next)}
					<scroll-slider-track class="popular__collection">
						${bannerSearch}
					</scroll-slider-track>
					</scroll-slider>
					<div class="popular__banner">
						${renderFilmInfo(nameRu, rating, year, description)}
						${renderBannerButtons()}
					</div>
				</div>`;
	};

	const markupSearchModal = () => {
		const {
			nameRu,
			description,
			rating,
			year,
			genres,
			countries: {
				0: { country },
			},
		} = state.searchFilm;

		const genresList = capitalizeGenres(genres);

		return `
    ${renderModalHeader(nameRu)}
    <div class="modal__wrapper">
      <div class="modal__genres">${genresList}</div>
      ${renderModalButtons()}
    </div>
    ${renderModalInfo({ rating, year, country })}
    <p>${description}</p>
  `;
	};

	function restoreOriginal() {
		if (state.original) {
			main.innerHTML = state.original;

			formSearch.reset();
			actions.setOrigin(null);
		}
	}

	async function showFilmByDirection(direction) {
		if (direction === 1) {
			actions.setIncrement();

			const nextFilmData = state.searchListData[state.index];

			actions.setSearchFilm(nextFilmData);
			renderSearchedFilms();
		}
		if (direction === -1) {
			actions.setDecrement();

			const prevFilmData = state.searchListData[state.index];

			actions.setSearchFilm(prevFilmData);
			renderSearchedFilms();
		}
	}

	function assignBackground(element, img) {
		return getBackgroundToElement(element, img);
	}

	function renderBannerSearchImg(data) {
		return getBannerSearchImg(data);
	}
}
