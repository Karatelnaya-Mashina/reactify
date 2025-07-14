const KEY_API = '5374a772-2b3c-485b-b3e2-432e1c94d40f';

const preview = document.getElementById('preview');
const btn = document.getElementById('preview-btn');

let dataPreview = {
	nameRu: 'Мадам Паутина',
	description: 'Медсестра из Манхэттена',
	year: 2024,
	countries: {
		0: { country: 'США' },
	},
	posterUrl: './img/preview/BANNER.jpeg',
};
let recommendationsPreview = [];

// Запросы превью
export async function fetchMovies(url) {
	try {
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'X-API-KEY': KEY_API,
				'Content-Type': 'application/json',
			},
		});
		const data = await response.json();

		let index = 0;
		console.log(data.items[index]);

		const {
			nameRu,
			description,
			year,
			countries: {
				0: { country },
			},
			posterUrl,
		} = data.items[index];

		dataPreview = {
			...dataPreview,
			nameRu,
			description,
			year,
			countries: {
				0: { country },
			},
			posterUrl,
		};

		recommendationsPreview = data.items.slice(1, 6);

		// console.log(dataPreview);
		// console.log(recommendationsPreview);

		renderPreview();
	} catch (error) {
		console.error('Error >>>', error.message);
	}
}

const renderPreview = () => {
	preview.innerHTML = markup();
	console.log(btn);
};

const markup = () => {
	const {
		nameRu,
		description,
		year,
		countries: {
			0: { country },
		},
		posterUrl,
	} = dataPreview;
	const bannerRecommendation = recommendationsPreview;

	preview.style.background = `url(${posterUrl}) center / cover no-repeat`;

	return `<div id="header__info" class="header__info">
				<h1 class="header__title">${nameRu}</h1>
					<p>${year} | Страна : <span>${country}</span></p>
					<div class="header__description">
						${description}
					</div>
					<button-modal
						id="preview-btn"
						class="header__preview-btn btn-animate btn"
					>
						<span>ПОДРОБНЕЕ</span>
					</button-modal>
					<div class="header__card">
						<h3 class="header__card-title">Рекомендации</h3>
						<div class="header__wrapper">
							<img src="${bannerRecommendation[0].posterUrl}" alt="${bannerRecommendation[0].nameRu}" />
							<img src="${bannerRecommendation[1].posterUrl}" alt="${bannerRecommendation[1].nameRu}" />
							<img src="${bannerRecommendation[2].posterUrl}" alt="${bannerRecommendation[2].nameRu}" />
							<img src="${bannerRecommendation[3].posterUrl}" alt="${bannerRecommendation[3].nameRu}" />
							<img src="${bannerRecommendation[4].posterUrl}" alt="${bannerRecommendation[4].nameRu}" />
						</div>
					</div>
				</div>`;
};

fetchMovies(
	'https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=1'
);
