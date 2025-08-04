export default class ModalWindow extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.addEventListener('click', e => {
			const profileModal = this.modalProfile;
			const detailsModal = this.modalMovie;
			const searchModal = this.modalSearch;

			if (e.target.matches('#preview-btn > span')) {
				detailsModal.classList.add('open');
			} else if (e.target.matches('#profile')) {
				profileModal.classList.add('open');
			} else if (e.target.matches('#modal-btn > span')) {
				searchModal.classList.add('open');
			}

			if (e.target.matches('.modal__btn-profile > svg')) {
				profileModal.classList.remove('open');
			}
			if (e.target.matches('.modal__btn-details > svg')) {
				detailsModal.classList.remove('open');
			}
			if (e.target.matches('.modal__btn-search > svg')) {
				console.log('e.target');

				searchModal.classList.remove('open');
			}

			window.addEventListener('keydown', e => {
				if (e.key === 'Escape') {
					profileModal.classList.remove('open');
					detailsModal.classList.remove('open');
					searchModal.classList.remove('open');
				}
			});

			document
				.querySelector('#modal-profile .modal__box-profile')
				.addEventListener('click', e => [(e._isClickWithInModal = true)]);
			profileModal.addEventListener('click', e => {
				if (e._isClickWithInModal) return;
				e.currentTarget.classList.remove('open');
			});

			document
				.querySelector('#modal-details .modal__box-details')
				.addEventListener('click', e => [(e._isClickWithInModal = true)]);

			detailsModal.addEventListener('click', e => {
				if (e._isClickWithInModal) return;
				e.currentTarget.classList.remove('open');
			});
			document
				.querySelector('#modal-search .modal__box-search')
				.addEventListener('click', e => [(e._isClickWithInModal = true)]);

			searchModal.addEventListener('click', e => {
				if (e._isClickWithInModal) return;
				e.currentTarget.classList.remove('open');
			});
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
		return this.querySelector('.modal__btn-details');
	}
	get btnOpenModalResponseSearch() {
		return this.querySelector('#modal-btn');
	}
	get modalSearch() {
		return this.querySelector('.modal__search');
	}
	get modalBtnSearch() {
		return this.querySelector('.modal__btn-search');
	}
}

customElements.define('custom-box', ModalWindow);
