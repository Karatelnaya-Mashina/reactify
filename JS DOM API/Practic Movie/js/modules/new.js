import { filmApi } from '../api/api.js';
import { getBannerSearchImg } from '../utils/utils.js';
import { renderBannerHeaderNew } from '../templates/templates.js';

export function newModule(state, actions) {
	const newSection = document.getElementById('new');

	async function formCallback() {
		const data = await filmApi.getFetchNewMovies(state.page);

		actions.setNewListData(data.filmsListNew);

		renderNewSection();
	}

	formCallback();

	const renderNewSection = () => {
		newSection.innerHTML = renderNewBanner();
	};

	const renderNewBanner = () => {
		const bannerNew = getBannerSearchImg(state.filmsListNew);

		const next = state.filmsListNew.length - 1 !== state.index;
		const prev = state.index !== 0;

		return `
		<div class="new__container container">
			<scroll-slider>
				${renderBannerHeaderNew(prev, next)}
				<scroll-slider-track class="new__collection">
					${bannerNew}
				</scroll-slider-track>
			</scroll-slider>
  		</div>`;
	};
}
