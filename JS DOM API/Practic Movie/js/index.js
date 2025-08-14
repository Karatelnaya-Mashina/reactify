import { previewModule } from './modules/preview.js';
import { popularModule } from './modules/popular.js';
import { newModule } from './modules/new.js';
import { categoriesModule } from './modules/categories.js';
import { searchModule } from './modules/search.js';

import ScrollSlider from './templates/scroll-slider.js';
import ScrollSliderTrack from './templates/scroll-slider-track.js';
import ModalWindow from './templates/modal.js';

import { actions, state } from './state/state.js';
import { filmApi } from './api/api.js';

document.addEventListener('DOMContentLoaded', () => {
	previewModule(state, actions);
	popularModule(state, actions);
	newModule(state, actions);
	categoriesModule(state, actions);
	searchModule(state, actions);
});
