function setDefaultValue(user) {
	return {
		name: user.name || 'Petr',
		age: user.age || 18,
		country: user.country || 'Litva',
		skill: user.skill || 'C#',
		profession: user.profession || 'Developer',
		status: user.status || 'Admin',
	};
}

const user = {
	name: '',
	country: 'Russia',
	skill: 'JS',
};

console.log(setDefaultValue(user));

const userExistsStatus = user && user.status === 'Admin';
console.log(userExistsStatus);

let user2 = '';
user2 ||= setDefaultValue(user);
console.log(user2);
