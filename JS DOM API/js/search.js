import { getSearchedFilms } from './api/api.js';

export function searchModule(state, actions) {
  const searchButton = document.getElementById('search-btn');
  const formSearch = document.querySelector('.header__wrap form');
  const modalSearch = document.querySelector('.modal__box-search');

  searchButton.addEventListener('click', () => showSearch());

  function showSearch() {
    const searchInput = document.getElementById('search');
    searchInput.classList.toggle('visually-hidden');
    searchInput.focus();
  }

  // submit form
  formSearch.addEventListener('submit', formCallback);

  async function formCallback(e) {
    e.preventDefault();
    const search = document.getElementById('search');

    if (search.value === '') {
      restoreOriginal();
      return;
    }

    if (search.value) {
      const data = await getSearchedFilms(search.value, state.index);

      actions.setSearchFilm(data.filmData);
      actions.setSearchListData(data.filmsListData);

      renderSearchedFilms();
    }
  }
  // -----------

  // renderSearchedFilms
  function renderSearchedFilms() {
    if (!state.original) {
      actions.setOrigin(main.innerHTML);
    }

    main.innerHTML = renderSearchBanner();

    const bannerFilm = document.querySelector('.popular__banner');
    addBackgroundToElement(bannerFilm, state.searchFilm.posterUrl);

    const nextBtn = document.querySelector('scroll-slider-btn-next');
    const prevBtn = document.querySelector('scroll-slider-btn-prev');

    if (nextBtn) {
      nextBtn.addEventListener('click', e => {
        e.preventDefault();
        showNextFilm();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', e => {
        e.preventDefault();
        showPrevFilm();
      });
    }

    modalSearch.innerHTML = markupSearchModal(state.searchFilm);
  }
  // -----------
  ``;
  // renderSearchBanner
  const renderSearchBanner = () => {
    const { nameRu, description, year, rating } = state.searchFilm;

    const bannerSearch = renderBannerSearchImg(state.searchListData);

    const hasNext = state.searchListData.length - 1 !== state.index;
    const hasPrev = state.index !== 0;

    return `<div class="popular__container container">
            <scroll-slider>
  						<div class="popular__shell">
  							<h2 class="popular__title">Результат</h2>
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
  // -----------

  // markupSearchModal
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
    } = state.searchFilm;

    const genresList = renderGenres(genres);

    addBackgroundToElement(modalSearch, posterUrl);

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
  // -----------

  function restoreOriginal() {
    if (state.original) {
      main.innerHTML = state.original;

      formSearch.reset();
      actions.setOrigin(null);
    }
  }

  async function showNextFilm() {
    actions.setIncrement();
    const nextFilmData = state.searchListData[state.index];

    actions.setSearchFilm(nextFilmData);
    renderSearchedFilms();
  }

  async function showPrevFilm() {
    actions.setDecrement();
    const prevFilmData = state.searchListData[state.index];
    actions.setSearchFilm(prevFilmData);
    renderSearchedFilms();
  }

  function addBackgroundToElement(element, imgUrl) {
    if (element) {
      element.style.background = `url(${imgUrl}) center / cover no-repeat`;
    }

    return !!element;
  }

  function renderBannerSearchImg(data) {
    return data
      .map(
        item => `
    <img class="slide" src="${item.posterUrl}" alt="${item.nameRu}" />
    `
      )
      .join('');
  }

  function renderGenres(data) {
    return data
      .map(
        item => `
  <button class="modal__genres-btn">${item.genre.replace(/^./, char =>
    char.toUpperCase()
  )}</button>
  `
      )
      .join('');
  }
}
