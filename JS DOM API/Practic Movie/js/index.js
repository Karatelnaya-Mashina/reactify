import { fetchMovies } from './preview.js';
import { fetchPopular } from './popular.js';

import ScrollSlider from './scroll-slider.js';
import ScrollSliderTrack from './scroll-slider-track.js';
import ModalWindow from './modal.js';

import { searchModule } from './search.js';
import { actions, state } from './state/state.js';

document.addEventListener('DOMContentLoaded', () => {
	searchModule(state, actions);
});
