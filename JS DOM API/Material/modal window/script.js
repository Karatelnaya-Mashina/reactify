const btnOpenModal = document.querySelector('#open-modal-btn');
const modal = document.querySelector('#modal');
const modalBtn = document.querySelector('#modal-btn');

btnOpenModal.addEventListener('click', function () {
	modal.classList.add('open');
});
modalBtn.addEventListener('click', function () {
	modal.classList.remove('open');
});

// Закрыть окно при нажатии ESC
window.addEventListener('keydown', e => {
	if (e.key === 'Escape') {
		modal.classList.remove('open');
	}
});

// Закрыть окно при клике вне его
document
	.querySelector('#modal .modal__box')
	.addEventListener('click', e => [(e._isClickWithInModal = true)]);
modal.addEventListener('click', e => {
	if (e._isClickWithInModal) return;
	e.currentTarget.classList.remove('open');
});
