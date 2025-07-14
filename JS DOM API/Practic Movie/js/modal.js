export default class ModalWindow extends HTMLElement {
	constructor() {
		super();

		this.btnOpenModalMovie.addEventListener('click', () => {
			console.log('click');

			this.modalMovie.classList.add('open');
		});
		this.modalBtnMovie.addEventListener('click', () => {
			this.modalMovie.classList.remove('open');
		});

		this.btnOpenModalProfile.addEventListener('click', () => {
			this.modalProfile.classList.add('open');
		});
		this.modalBtnProfile.addEventListener('click', () => {
			this.modalProfile.classList.remove('open');
		});

		// Закрыть окно при нажатии ESC
		window.addEventListener('keydown', e => {
			if (e.key === 'Escape') {
				this.modalProfile.classList.remove('open');
				this.modalMovie.classList.remove('open');
			}
		});

		// Закрыть окно при клике вне его
		document
			.querySelector('#modal-profile .modal__box-profile')
			.addEventListener('click', e => [(e._isClickWithInModal = true)]);
		this.modalProfile.addEventListener('click', e => {
			if (e._isClickWithInModal) return;
			e.currentTarget.classList.remove('open');
		});

		document
			.querySelector('#modal-details .modal__box-details')
			.addEventListener('click', e => [(e._isClickWithInModal = true)]);

		this.modalMovie.addEventListener('click', e => {
			if (e._isClickWithInModal) return;
			e.currentTarget.classList.remove('open');
		});
	}
	get btnOpenModalProfile() {
		return this.querySelector('#profile');
	}
	get modalProfile() {
		return this.querySelector('.modal__profile');
	}
	get modalBtnProfile() {
		return this.querySelector('.modal__btn-profile');
	}
	get btnOpenModalMovie() {
		return this.querySelector('#preview-btn');
	}
	get modalMovie() {
		return this.querySelector('.modal__details');
	}
	get modalBtnMovie() {
		return this.querySelector('.modal__box-details');
	}
}

customElements.define('custom-box', ModalWindow);
