export function capitalizeGenres(data) {
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

export function getBannerSearchImg(data) {
	return data
		.map(
			item => `
    <img class="slide" src="${item.posterUrl}" alt="${item.nameRu}" />
    `
		)
		.join('');
}

export function getCurrentMonth() {
	const month = new Date().getMonth() + 1;
	return month < 10 ? `0${month}` : month;
}

export function getBackgroundToElement(element, img) {
	if (element) {
		element.style.background = `url(${img}) center / cover no-repeat`;
	}

	return !!element;
}
