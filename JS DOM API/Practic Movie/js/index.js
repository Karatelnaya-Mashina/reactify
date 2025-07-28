import { fetchMovies } from './preview.js';
import { showSearch } from './search.js';
import { fetchSearch } from './search.js';
import { fetchPopular } from './popular.js';

import ScrollSlider from './scroll-slider.js';
import ScrollSliderTrack from './scroll-slider-track.js';
import ModalWindow from './modal.js';

document.getElementById('search-btn').addEventListener('click', showSearch);
