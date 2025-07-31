export default class ScrollSlider extends HTMLElement {
	constructor() {
		super();

		this.prevBtn?.addEventListener('click', () => {
			this.track.scrollToPrev();
		});
		this.nextBtn?.addEventListener('click', () => {
			this.track.scrollToNext();
		});
		this.track?.addEventListener('scroll', () => {
			this.handleScroll();
		});
	}
	get track() {
		return this.querySelector('scroll-slider-track');
	}
	get prevBtn() {
		return this.querySelector('scroll-slider-btn-prev');
	}
	get nextBtn() {
		return this.querySelector('scroll-slider-btn-next');
	}
	handleScroll() {
		if (this.prevBtn) {
			this.prevBtn.hidden = this.track?.isTrackStart();
		}
		if (this.nextBtn) {
			this.nextBtn.hidden = this.track?.isTrackFinish();
		}
	}
}

customElements.define('scroll-slider', ScrollSlider);
