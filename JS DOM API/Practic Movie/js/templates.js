export const renderBannerControls = (hasPrev, hasNext) => `
  <scroll-slider-btn>
    <scroll-slider-btn-prev
      class="popular__arrow-prev"
      tabindex="0"
      style="${hasPrev ? '' : 'display: none;'}"
    >
      <img id="prev-btn" src="./img/arrow-left.png" alt="left" />
    </scroll-slider-btn-prev>
    <scroll-slider-btn-next
      class="popular__arrow-next"
      tabindex="0"
      style="${hasNext ? '' : 'display: none;'}"
    >
      <img id="next-btn" src="./img/arrow-right.png" alt="right" />
    </scroll-slider-btn-next>
  </scroll-slider-btn>
`;

export const renderBannerHeader = (hasPrev, hasNext) => `
  <div class="popular__shell">
    <h2 class="popular__title">Результат</h2>
    ${renderBannerControls(hasPrev, hasNext)}
  </div>
`;

export const renderFilmInfo = ({ nameRu, rating, year, description }) => `
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

export const renderModalHeader = nameRu => `
  <div class="modal__header">
    <h2 class="modal__title-details">${nameRu}</h2>
    <button id="modal-btn" class="modal__btn-search">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
      </svg>
    </button>
  </div>
`;

export const renderModalButtons = () => `
  <div class="modal__button">
    <button class="modal__button-play btn-animate btn"><span>Смотреть</span></button>
    <button class="modal__button-trailer btn-animate btn"><span>Трейлер</span></button>
    <button class="modal__button-like"><img src="./img/like.png" alt="like" /></button>
    <button class="modal__button-share">
      <img src="./img/share.png" alt="share" />
      <p>Поделиться</p>
    </button>
  </div>
`;

export const renderModalInfo = ({ rating, year, country }) => `
  <div class="modal__info">
    <div class="modal__info-rating">Рейтинг: ${rating}</div>
    <div class="modal__info-year">${year}</div>
    <div class="modal__info-country">${country}</div>
  </div>
`;
