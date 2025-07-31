const KEY_API = '5374a772-2b3c-485b-b3e2-432e1c94d40f';
const URL_API = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=`;

const search = document.getElementById('search');
const formSearch = document.querySelector('.header__wrap form');
const body = document.querySelector('body');
const modalSearch = document.querySelector('.modal__box-search');

let original;
let index = 0;

let dataSearch = {};
let searchList = [];
let searchUrl;

// Вкл. поисковика
export function showSearch() {
	const search = document.getElementById('search');
	search.classList.toggle('visually-hidden');
}

formSearch.addEventListener('submit', e => {
	e.preventDefault();

	searchUrl = `${URL_API}${search.value}`;
	if (search.value) {
		fetchSearch();
	}
	if (search.value === '') {
		restoreOriginal();
	}
});

export async function fetchSearch() {
	try {
		const response = await fetch(searchUrl, {
			method: 'GET',
			headers: {
				'X-API-KEY': KEY_API,
				'Content-Type': 'application/json',
			},
		});
		const data = await response.json();

		const {
			nameRu,
			description,
			year,
			rating,
			genres,
			countries: {
				0: { country },
			},
			posterUrl,
		} = data.films[index];

		dataSearch = {
			...dataSearch,
			nameRu,
			description,
			year,
			rating,
			genres,
			countries: {
				0: { country },
			},
			posterUrl,
		};

		searchList = data.films.slice(1, 20);

		renderSearch();
	} catch (error) {
		console.error('Error >>>', error.message);
	}
}

const renderSearchBanner = () => {
	const { nameRu, description, year, rating } = dataSearch;

	const bannerSearch = searchList
		.map(
			item => `
        <img class="slide" src="${item.posterUrl}" alt="${item.nameRu}" />
      `
		)
		.join('');

	return `<div class="popular__container container">
          						<scroll-slider>
							<div class="popular__shell">
								<h2 class="popular__title">Результат</h2>
								<scroll-slider-btn>
									<scroll-slider-btn-prev
										class="popular__arrow-prev"
										tabindex="0"
										hidden
									>
										<img id="prev-btn" src="./img/arrow-left.png" alt="left" />
									</scroll-slider-btn-prev>
									<scroll-slider-btn-next
										class="popular__arrow-next"
										tabindex="0"
									>
										<img
											id="next-btn"
											src="./img/arrow-right.png"
											alt="right"
										/>
									</scroll-slider-btn-next>
								</scroll-slider-btn>
							</div>
							<scroll-slider-track class="popular__collection">
								${bannerSearch}
							</scroll-slider-track>
						</scroll-slider>
						<div class="popular__banner">
							<h3 class="popular__banner-title">${nameRu}</h3>
							<p>Рейтинг: <span>${rating}</span> ${year}</p>
							<div class="popular__description">
								${description}
							</div>
							<button class="popular__banner-btn btn-animate btn">
								<span>ТРЕЙЛЕР</span>
							</button>
							<button class="popular__banner-btn two-btn btn-animate btn">
								<span>СМОТРЕТЬ СЕЙЧАС</span>
							</button>
							<button
								id="modal-btn"
								class="popular__banner-btn three-btn btn-animate btn"
							>
								<span>Подробнее</span>
							</button>
						</div>
          </div>`;
};

const markupSearchModal = () => {
	const {
		nameRu,
		description,
		year,
		rating,
		genres,
		countries: {
			0: { country },
		},
		posterUrl,
	} = dataSearch;

	const genresList = genres
		.map(
			item => `
        <button class="modal__genres-btn">${item.genre.replace(/^./, char =>
					char.toUpperCase()
				)}</button>
      `
		)
		.join('');

	modalSearch.style.background = `url(${posterUrl}) center / cover no-repeat`;

	return `<div class="modal__header">
						<h2 class="modal__title-details">${nameRu}</h2>
						<button id="modal-btn" class="modal__btn-search">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width="20"
								height="20"
								viewBox="0 0 20 20"
							>
								<path
									d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"
								></path>
							</svg>
						</button>
					</div>
					<div class="modal__wrapper">
						<div class="modal__genres">
							${genresList}
						</div>
						<div class="modal__button">
							<button class="modal__button-play btn-animate btn">
								<span>Смотреть</span>
							</button>
							<button class="modal__button-trailer btn-animate btn">
								<span>Трейлер</span>
							</button>
							<button class="modal__button-like">
								<img src="./img/like.png" alt="like" />
							</button>
							<button class="modal__button-share">
								<img src="./img/share.png" alt="share" />
								<p>Поделиться</p>
							</button>
						</div>
					</div>
					<div class="modal__info">
						<div class="modal__info-rating">Рейтинг: ${rating}</div>
						<div class="modal__info-year">${year}</div>
						<div class="modal__info-country">${country}</div>
					</div>
					<p>
						${description}
					</p>`;
};

const renderSearch = () => {
	if (!original) {
		original = body.innerHTML;
	}
	main.innerHTML = renderSearchBanner();

	const bannerFilm = document.querySelector('.popular__banner');
	if (bannerFilm) {
		bannerFilm.style.background = `url(${dataSearch.posterUrl}) center / cover no-repeat`;
	}
	const nextBtn = document.querySelector('scroll-slider-btn-next');
	nextBtn.addEventListener('click', e => {
		e.preventDefault();
	});

	modalSearch.innerHTML = markupSearchModal();
};

function restoreOriginal() {
	if (original) {
		body.innerHTML = original;
		search.value = '';
	}
}
