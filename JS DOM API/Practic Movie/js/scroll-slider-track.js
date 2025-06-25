export default class ScrollSliderTrack extends HTMLElement {
	get slides() {
		return [...this.querySelectorAll('.slide')];
	}
	getNextSlide() {
		const currentScroll = this.scrollLeft;

		return this.slides.find(slide => slide.offsetLeft > currentScroll);
	}

	getNextSlideWith() {
		const nextSlide = this.getNextSlide();

		if (nextSlide) {
			return nextSlide.offsetLeft - this.scrollLeft;
		}
		return 0;
	}
	isTrackFinish() {
		return (
			Math.ceil(this.scrollLeft + this.clientWidth) >= this.scrollWidth - 1
		);
	}
	isTrackStart() {
		return this.scrollLeft <= 25;
	}

	scrollByAmount(amount) {
		this.scrollBy({ left: amount, behavior: 'smooth' });
	}
	scrollToNext() {
		this.scrollByAmount(this.getNextSlideWith());
	}
	scrollToPrev() {
		this.scrollByAmount(-this.getNextSlideWith());
	}
}
customElements.define('scroll-slider-track', ScrollSliderTrack);
