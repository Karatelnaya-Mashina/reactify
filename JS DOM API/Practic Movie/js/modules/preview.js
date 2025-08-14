import { filmApi } from '../api/api.js';
import {
	capitalizeGenres,
	getBannerSearchImg,
	getBackgroundToElement,
} from '../utils/utils.js';
import {
	renderPreviewFilmInfo,
	renderButton,
	renderBannerPreviewRecommendations,
	renderModalHeader,
	renderModalButtons,
	renderModalInfo,
} from '../templates/templates.js';

export function previewModule(state, actions) {
	const preview = document.getElementById('preview');
	const boxDetails = document.querySelector('.modal__box-details');

	async function formCallback() {
		const data = await filmApi.getFetchPreviewMovies(state.index);

		actions.setPreviewFilm(data.dataPreview);
		actions.setPreviewListData(data.filmsListPreview.slice(1, 7));

		renderPreviewFilms();
	}

	formCallback();

	const renderPreviewFilms = () => {
		preview.innerHTML = markup();
		boxDetails.innerHTML = markupModal();
	};

	const markup = () => {
		const {
			nameRu,
			description,
			year,
			countries: {
				0: { country },
			},
		} = state.dataPreview;

		const bannerRecommendation = renderBannerPreviewImg(state.filmsListPreview);

		getBackgroundToElement(preview, state.dataPreview.posterUrl);

		return `<div id="header__info" class="header__info">
					${renderPreviewFilmInfo(nameRu, description, year, country)}
					<button
						${renderButton()}
			 		</button>
					<div class="header__card">
						${renderBannerPreviewRecommendations(bannerRecommendation)}
					</div>
				</div>`;
	};
	const markupModal = () => {
		const {
			nameRu,
			description,
			year,
			genres,
			ratingImdb,
			countries: {
				0: { country },
			},
		} = state.dataPreview;

		const genresList = capitalizeGenres(genres);

		getBackgroundToElement(boxDetails, state.dataPreview.posterUrl);

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

	function renderBannerPreviewImg(data) {
		return getBannerSearchImg(data);
	}
}
