const CLIENT_ID = 'D1CLf3YkavgaQ4m--yL3ztBPD3kJPsD5sOz0iepTev0';
const slider = document.getElementById('slider');

let state = [];
let currentSlide;

const fetchPhotos = async () => {
	try {
		const url = `https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}&count=4&query=mazda`;
		const response = await fetch(url);
		const data = await response.json();
		if (response.ok && data.length) {
			state = data;
			currentSlide = data[0].id;

			setPhotos();
		}
		console.log(data);
	} catch (error) {
		console.error('Error >>>', error.message);
	}
};
const renderItem = () => {
	return state
		.map(({ urls: { regular }, user: { name }, id }) => {
			const isActive = currentSlide === id ? 'active' : '';
			return `
			<div class="slide ${isActive}" data-id="${id}" style="background-image: url(${regular})">
				<div class="slide-text" >
					<span>Photo by</span>
					${name}
				</div>
			</div>
		`;
		})
		.join('');
};

const handleClick = ({ currentTarget }) => {
	const slides = document.querySelectorAll('.slide');
	const { id } = currentTarget.dataset;

	if (id === currentSlide) return;
	slides.forEach(slide => slide.classList.remove('active'));
	currentTarget.classList.add('active');
	currentSlide = id;
};

const setPhotos = () => {
	slider.innerHTML = renderItem();
	const slides = document.querySelectorAll('.slide');
	slides.forEach(slide => {
		slide.addEventListener('click', handleClick);
	});
};
fetchPhotos();
