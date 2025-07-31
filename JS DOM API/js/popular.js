const KEY_API = '5374a772-2b3c-485b-b3e2-432e1c94d40f';

const popular = document.getElementById('popular');
const boxPopular = document.querySelector('.modal__box-search');

let dataPopular = {
  posterUrl: './img/popular/BANNER.jpeg',
};
let popularList = [];

console.log('popular');

// Запросы превью
export async function fetchPopular(url) {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-API-KEY': KEY_API,
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log('fetchPopular:::::', data);

    let index = 0;

    const {
      nameRu,
      description,
      year,
      ratingKinopoisk,
      genres,
      countries: {
        0: { country },
      },
      posterUrl,
    } = data.items[index];

    dataPopular = {
      ...dataPopular,
      nameRu,
      description,
      year,
      ratingKinopoisk,
      genres,
      countries: {
        0: { country },
      },
      posterUrl,
    };

    popularList = data.items.slice(1, 20);

    renderPopular();
  } catch (error) {
    console.error('Error >>>', error.message);
  }
}

const renderPopularBanner = () => {
  const { nameRu, description, year, rating } = dataPopular;

  const bannerPopular = popularList
    .map(
      item => `
        <img class="slide" src="${item.posterUrl}" alt="${item.nameRu}" />
      `
    )
    .join('');

  return `<div class="popular__container container">
          						<scroll-slider>
							<div class="popular__shell">
								<h2 class="popular__title">Популярное</h2>
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
								${bannerPopular}
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

const markupPopularModal = () => {
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
  } = dataPopular;

  const genresList = genres
    .map(
      item => `
        <button class="modal__genres-btn">${item.genre.replace(/^./, char =>
          char.toUpperCase()
        )}</button>
      `
    )
    .join('');

  boxPopular.style.background = `url(${posterUrl}) center / cover no-repeat`;

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

const renderPopular = () => {
  popular.innerHTML = renderPopularBanner();

  const bannerFilm = document.querySelector('.popular__banner');
  if (bannerFilm) {
    bannerFilm.style.background = `url(${dataPopular.posterUrl}) center / cover no-repeat`;
  }

  boxPopular.innerHTML = markupPopularModal();
};

fetchPopular(
  'https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_ALL&page=1'
);
