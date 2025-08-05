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
