import { icons } from '../utils/icons.js';

export const renderPreviewFilmInfo = (nameRu, description, year, country) => `
  <h1 class="header__title">${nameRu}</h1>
  <p>${year} | Страна : <span>${country}</span></p>
  <div class="header__description">
    ${description}
  </div>
`;

export const renderButton = () => `
						id="preview-btn"
						class="header__preview-btn btn-animate btn"
					>
						<span>ПОДРОБНЕЕ</span>
`;

export const renderBannerControls = (prev, next) => `
  <scroll-slider-btn>
    <scroll-slider-btn-prev
      class="popular__arrow-prev"
      tabindex="0"
      style="${prev}"
    >
      ${icons.prev}
    </scroll-slider-btn-prev>
    <scroll-slider-btn-next
      class="popular__arrow-next"
      tabindex="0"
      style="${next}"
    >
      ${icons.next}
    </scroll-slider-btn-next>
  </scroll-slider-btn>
`;

export const renderBannerPreviewRecommendations = bannerRecommendation => `
  <h3 class="header__card-title">Рекомендации</h3>
  <div class="header__wrapper">
    ${bannerRecommendation}
  </div>
`;

export const renderBannerHeader = (prev, next) => `
  <div class="popular__shell">
    <h2 class="popular__title">Результат</h2>
    ${renderBannerControls(prev, next)}
  </div>
`;

export const renderBannerHeaderPopular = (prev, next) => `
  <div class="popular__shell">
    <h2 class="popular__title">Популярное</h2>
    ${renderBannerControls(prev, next)}
  </div>
`;

export const renderBannerHeaderNew = (prev, next) => `
  <div class="popular__shell">
    <h2 class="popular__title">Новинки</h2>
    ${renderBannerControls(prev, next)}
  </div>
`;

export const renderBannerHeaderCategories = (prev, next) => `
  <div class="category__shell popular__shell">
    <div class="category__wrapper">
      <h2 class="popular__title">Категории</h2>
      ${renderBannerControls(prev, next)}
    </div>
      ${document.querySelector('.category__box')?.outerHTML || ''}
  </div>
`;

export const renderFilmInfo = (nameRu, rating, year, description) => `
  <h3 class="popular__banner-title">${nameRu}</h3>
  <p>Рейтинг: <span>${rating}</span> ${year}</p>
  <div class="popular__description">${description}</div>
`;

export const renderBannerButtons = () => `
  <button class="popular__banner-btn btn-animate btn">
    <span>ТРЕЙЛЕР</span>
  </button>
  <button class="popular__banner-btn two-btn btn-animate btn">
    <span>СМОТРЕТЬ СЕЙЧАС</span>
  </button>
  <button id="modal-btn" class="popular__banner-btn three-btn btn-animate btn">
    <span>Подробнее</span>
  </button>
`;

export const renderBannerButtonsCategory = () => `
  <button class="popular__banner-btn btn-animate btn">
    <span>ТРЕЙЛЕР</span>
  </button>
  <button class="popular__banner-btn two-btn btn-animate btn">
    <span>СМОТРЕТЬ СЕЙЧАС</span>
  </button>
  <button id="modal-btn-category" class="popular__banner-btn three-btn btn-animate btn">
    <span>Подробнее</span>
  </button>
`;

export const renderModalHeader = nameRu => `
  <div class="modal__header">
    <h2 class="modal__title-details">${nameRu}</h2>
    <button id="modal-btn" class="modal__btn-search modal__btn-category">
      ${icons.closeSvg}
    </button>
  </div>
`;

export const renderModalButtons = () => `
  <div class="modal__button">
    <button class="modal__button-play btn-animate btn"><span>Смотреть</span></button>
    <button class="modal__button-trailer btn-animate btn"><span>Трейлер</span></button>
    <button class="modal__button-like">${icons.like}</button>
    <button class="modal__button-share">
      ${icons.share}
      <p>Поделиться</p>
    </button>
  </div>
`;

export const renderModalInfo = (rating, year, country) => `
  <div class="modal__info">
    <div class="modal__info-rating">Рейтинг: ${rating}</div>
    <div class="modal__info-year">${year}</div>
    <div class="modal__info-country">${country}</div>
  </div>
`;
