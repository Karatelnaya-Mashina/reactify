const KEY_API = '5374a772-2b3c-485b-b3e2-432e1c94d40f';

import { searchData } from '../data/searchData.js';

export async function getSearchedFilms(url, index) {
	try {
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'X-API-KEY': KEY_API,
				'Content-Type': 'application/json',
			},
		});

		const data = await response.json();

		return {
			filmData: data.films[index],
			filmsListData: data.films.slice(1, 20),
		};
	} catch (error) {
		console.error('Error >>>', error.message);
	}
}
