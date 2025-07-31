const KEY_API = '5374a772-2b3c-485b-b3e2-432e1c94d40f';

const preview = document.getElementById('preview');
const boxDetails = document.querySelector('.modal__box-details');

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

    const {
      nameRu,
      description,
      year,
      ratingImdb,
      genres,
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
      ratingImdb,
      genres,
      countries: {
        0: { country },
      },
      posterUrl,
    };

    recommendationsPreview = data.items.slice(1, 7);

    renderPreview();
  } catch (error) {
    console.error('Error >>>', error.message);
  }
}

const renderPreview = () => {
  preview.innerHTML = markup();
  boxDetails.innerHTML = markupModal();
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

  const bannerRecommendation = recommendationsPreview
    .map(
      item => `
        <img src="${item.posterUrl}" alt="${item.nameRu}" />
      `
    )
    .join('');

  preview.style.background = `url(${posterUrl}) center / cover no-repeat`;

  return `<div id="header__info" class="header__info">
				<h1 class="header__title">${nameRu}</h1>
					<p>${year} | Страна : <span>${country}</span></p>
					<div class="header__description">
						${description}
					</div>
					<button
						id="preview-btn"
						class="header__preview-btn btn-animate btn"
					>
						<span>ПОДРОБНЕЕ</span>
			 		</button>
					<div class="header__card">
						<h3 class="header__card-title">Рекомендации</h3>
						<div class="header__wrapper">
							${bannerRecommendation}
						</div>
					</div>
				</div>`;
};
const markupModal = () => {
  const {
    nameRu,
    description,
    year,
    ratingImdb,
    genres,
    countries: {
      0: { country },
    },
    posterUrl,
  } = dataPreview;

  const genresArr = genres
    .map(
      item => `
        <button class="modal__genres-btn">${item.genre.replace(/^./, char =>
          char.toUpperCase()
        )}</button>
      `
    )
    .join('');

  boxDetails.style.background = `url(${posterUrl}) center / cover no-repeat`;

  return `<div class="modal__header">
						<h2 class="modal__title-details">${nameRu}</h2>
						<button id="modal-btn" class="modal__btn-details">
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
							${genresArr}
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
						<div class="modal__info-rating">Рейтинг: ${ratingImdb}</div>
						<div class="modal__info-year">${year}</div>
						<div class="modal__info-country">${country}</div>
					</div>
					<p>
						${description}
					</p>`;
};

fetchMovies(
  'https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=1'
);
