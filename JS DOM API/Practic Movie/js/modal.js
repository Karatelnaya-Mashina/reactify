// Модальное окно фильма
const btnOpenModalMovie = document.querySelector('#preview-btn');
const modalMovie = document.querySelector('.modal__details');
const modalBtnMovie = document.querySelector('.modal__btn-details');

btnOpenModalMovie.addEventListener('click', function () {
	modalMovie.classList.add('open');
});
modalBtnMovie.addEventListener('click', function () {
	modalMovie.classList.remove('open');
});

// Закрыть окно при нажатии ESC
window.addEventListener('keydown', e => {
	if (e.key === 'Escape') {
		modalMovie.classList.remove('open');
	}
});

// Закрыть окно при клике вне его
document
	.querySelector('#modal .modal__box-profile')
	.addEventListener('click', e => [(e._isClickWithInModal = true)]);
modalMovie.addEventListener('click', e => {
	if (e._isClickWithInModal) return;
	e.currentTarget.classList.remove('open');
});