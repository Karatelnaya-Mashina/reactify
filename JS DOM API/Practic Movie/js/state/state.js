export const actions = {
	setOrigin: html => {
		state.original = html;
	},
	setIndex: index => {
		state.index = index;
	},
	setIncrement: () => {
		if (state.searchListData === state.index - 1) {
			return;
		}
		state.index = state.index + 1;
	},
	setDecrement: () => {
		if (state.index === 0) {
			return;
		}
		state.index = state.index - 1;
	},
	setPreviewFilm: film => {
		state.dataPreview = film;
	},
	setPreviewListData: listData => {
		state.filmsListPreview = listData;
	},
	setPopularFilm: film => {
		state.dataPopular = film;
	},
	setPopularListData: listData => {
		state.filmsListPopular = listData;
	},
	setNewListData: listData => {
		state.filmsListNew = listData;
	},
	setCategoriesFilm: film => {
		state.dataCategories = film;
	},
	setCategoriesListData: listData => {
		state.filmsListCategories = listData;
	},
	setSearchFilm: film => {
		state.searchFilm = film;
	},
	setSearchListData: listData => {
		state.searchListData = listData;
	},
};

export const state = {
	index: 0,
	page: 1,

	original: null,

	dataDefault: {
		nameRu: 'Мадам Паутина',
		description: 'Медсестра из Манхэттена',
		year: 2024,
		countries: {
			0: { country: 'США' },
		},
		posterUrl: './img/preview/BANNER.jpeg',
	},

	dataPreview: {},
	filmsListPreview: [],

	dataPopular: {},
	filmsListPopular: [],

	filmsListNew: [],

	dataCategories: {},
	filmsListCategories: [],

	searchFilm: {
		posterUrl: './img/preview/BANNER.jpeg',
	},
	searchListData: [],
};
