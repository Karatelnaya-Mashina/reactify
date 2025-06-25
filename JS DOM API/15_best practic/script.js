const API_URL = 'https://jsonplaceholder.typicode.com/users';
const userContainer = document.getElementById('user-container');
const searchInput = document.getElementById('search');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const images = document.querySelectorAll('.slider__image');
let currentIndex = 0;

burger.addEventListener('click', () => {
	if (menu.style.display === 'none' || menu.style.display === '') {
		menu.style.display = 'block';
	} else {
		menu.style.display = 'none';
	}
});

async function fetchUsers() {
	try {
		const response = await fetch(API_URL);
		const users = await response.json();
		return users;
	} catch (error) {
		console.error('Error >>>', error);
		return [];
	}
}
function displayUsers(users) {
	userContainer.innerHTML = '';

	users.forEach(user => {
		const userCard = document.createElement('div');
		userCard.classList.add('user-card');

		userCard.innerHTML = `
			<h3>${user.name}</h3>
			<p><strong>Email:</strong> ${user.email}</p>
			<p><strong>Phone:</strong> ${user.phone}</p>
    	`;
		userCard.addEventListener('click', () => openModal(user));
		userContainer.appendChild(userCard);
	});
}
fetchUsers().then(displayUsers);

function openModal(user) {
	modalBody.innerHTML = `
	<h3>${user.name}</h3>
	<p><strong>Email:</strong> ${user.email}</p>
	<p><strong>Phone:</strong> ${user.phone}</p>
	<p><strong>Website:</strong> ${user.website}</p>
	<p><strong>Address:</strong> ${user.address.street}, ${user.address.city}
	</p>
	<p><strong>Company:</strong> ${user.company.name}</p>
	`;
	modal.style.display = 'block';
}

closeModal.addEventListener('click', () => {
	modal.style.display = 'none';
});

window.addEventListener('click', event => {
	if (event.target === modal) {
		modal.style.display = 'none';
	}
});

function showSlide(index) {
	images.forEach(
		(img, i) => (img.style.display = i === index ? 'inline-block' : 'none')
	);
}

document.getElementById('prev').addEventListener('click', () => {
	currentIndex = (currentIndex - 1 + images.length) % images.length;
	showSlide(currentIndex);
});
document.getElementById('next').addEventListener('click', () => {
	currentIndex = (currentIndex + 1) % images.length;
	showSlide(currentIndex);
});
showSlide(currentIndex);
