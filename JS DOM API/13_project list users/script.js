const API_URL = 'https://jsonplaceholder.typicode.com/users';
const userContainer = document.getElementById('user-container');
const searchInput = document.getElementById('search');

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
			<p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
    	`;
		userContainer.appendChild(userCard);
	});
}

fetchUsers().then(displayUsers);

searchInput.addEventListener('input', () => {
	const query = searchInput.value.toLowerCase();

	fetchUsers().then(users => {
		const filteredUsers = users.filter(user =>
			user.name.toLowerCase().includes(query)
		);
		displayUsers(filteredUsers);
	});
});


