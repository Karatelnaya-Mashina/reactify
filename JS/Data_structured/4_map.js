const informationCompanyEmployees = new Map([
	['Igor', 'Developer'],
	['Ivan', 'HR'],
	['Sasha', 'Security'],
	['Dasha', 'Manager'],
	['Masha', 'General manager'],
]);

console.log(informationCompanyEmployees);

function addEmployee(name, position) {
	return informationCompanyEmployees.set(name, position);
}

addEmployee('Kris', 'Developer assistant');

console.log(informationCompanyEmployees);

function getPosition(name) {
	return informationCompanyEmployees.get(name);
}

console.log(getPosition('Kris'));

function displaysListAllEmployees(list) {
	for ([key, value] of list) {
		console.log(`Сотрудник: ${key} - Должность: ${value}`);
	}
}

displaysListAllEmployees(informationCompanyEmployees);
