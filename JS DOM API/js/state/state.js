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
  setSearchFilm: searchFilm => {
    state.searchFilm = searchFilm;
  },
  setSearchListData: searchListData => {
    state.searchListData = searchListData;
  },
};

export const state = {
  index: 0,

  original: null,

  searchListData: [],
  searchFilm: {
    posterUrl: './img/preview/BANNER.jpeg',
  },
};
