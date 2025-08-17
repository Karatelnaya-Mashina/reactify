import { searchData } from '../data/searchData.js';
import { getCurrentMonth } from '../utils/utils.js';

const KEY_API = '5374a772-2b3c-485b-b3e2-432e1c94d40f';

const API_URLS = {
	preview:
		'https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=1',
	popular:
		'https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_ALL&page=1',
	new: 'https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2025&month=JANUARY',
	categories: 'https://kinopoiskapiunofficial.tech/api/v2.2/films/filters',
	search:
		'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=',
};

export const filmApi = {
	getFetchPreviewMovies: async index => {
		const data = await makeRequest(API_URLS.preview);

		return {
			dataPreview: data.items[index],
			filmsListPreview: data.items,
		};
	},

	getFetchPopularMovies: async index => {
		const data = await makeRequest(API_URLS.popular);
		return {
			dataPopular: data.items[index],
			filmsListPopular: data.items,
		};
	},

	getFetchNewMovies: async page => {
		const currentYear = new Date().getFullYear();
		const currentMonth = getCurrentMonth();
		// const url = `${API_URLS.new}?year=${currentYear}&month=${currentMonth}&page=${page}`;
		const url = `${API_URLS.new}`;

		const data = await makeRequest(url);

		return {
			filmsListNew: data.items,
		};
	},

	getFetchCategories: async index => {
		const data = await makeRequest(
			'https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_ALL&page=2'
		);

		return {
			dataCategories: data.items[index],
			filmsListCategories: data.items,
		};
	},

	getSearchedFilms: async (keyword, index) => {
		const url = `${API_URLS.search}${keyword}`;
		const data = await makeRequest(url);

		return {
			filmData: data.films[index],
			filmsListData: data.films,
		};
	},
};

const makeRequest = async url => {
	try {
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'X-API-KEY': KEY_API,
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			throw new Error(`status response API: ${response.status}`);
		}
		return response.json();
		// return searchData;
	} catch (error) {
		console.error('ERROR>>>', error.message);
		return { items: [] };
	}
};
