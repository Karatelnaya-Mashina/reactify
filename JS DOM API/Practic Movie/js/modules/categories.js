import { filmApi } from '../api/api.js';
import {
	getBannerSearchImg,
	getBackgroundToElement,
	capitalizeGenres,
} from '../utils/utils.js';
import {
	renderBannerHeaderCategories,
	renderFilmInfo,
	renderBannerButtonsCategory,
	renderModalHeader,
	renderModalButtons,
	renderModalInfo,
} from '../templates/templates.js';

export function categoriesModule(state, actions) {
	const categorySection = document.getElementById('category');
	const categoryModal = document.querySelector('.modal__box-category');

	async function formCallback() {
		const data = await filmApi.getFetchCategories(state.index);

		actions.setCategoriesFilm(data.dataCategories);
		actions.setCategoriesListData(data.filmsListCategories);

		renderCategories();
	}
	formCallback();

	const renderCategories = () => {
		categorySection.innerHTML = markupCategory();

		const categoryBackground = document.querySelector('.category__banner');

		getBackgroundToElement(categoryBackground, state.dataCategories.posterUrl);

		categoryModal.innerHTML = markupCategoryModal();

		const categoryBackgroundModal = getBackgroundToElement(
			categoryModal,
			state.dataCategories.posterUrl
		);
	};

	const markupCategory = () => {
		const { nameRu, description, year, ratingImdb } = state.dataCategories;

		const bannerCategory = getBannerSearchImg(state.filmsListCategories);

		const next = state.filmsListPopular.length - 1 !== state.index;
		const prev = state.index !== 0;

		return `
		<div class="category__container container">
			<scroll-slider>
					${renderBannerHeaderCategories(prev, next)}
				<scroll-slider-track class="popular__collection">
					${bannerCategory}
				</scroll-slider-track>
			</scroll-slider>
			<div class="category__banner popular__banner">
				${renderFilmInfo(nameRu, ratingImdb, year, description)}
				${renderBannerButtonsCategory()}
			</div>
 		</div>`;
	};

	const markupCategoryModal = () => {
		const {
			nameRu,
			description,
			year,
			ratingImdb,
			genres,
			countries: {
				0: { country },
			},
		} = state.dataCategories;

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
