let task = prompt('Напиши задачу или оставь пустую строку');
let comltetedTaskCount = 0;

// Проверка, есть ли задача
const showTask = item =>
	item.split(' ').join('') !== '' ? `Задача: ${item}` : 'Задача отсутствует';

console.log(showTask(task));

// Добавляем задачу, если ее не
function setTask(taskDescription) {
	if (task.split(' ').join('') === '') {
		return (task = taskDescription);
	} else {
		let er = +prompt(
			'Задача уже есть, надо завершить или удалить старую задачу, чтобы назначить новую. Напиши цифру.  Отмена = 0. Завершить = 1. Удалить = 2 - 9.'
		);
		if (er === 1) {
			completeTask(task);
			return console.log(`Новая задача: ${(task = taskDescription)}`);
		} else if (er === 0) {
			console.log('Отмена. Прежняя задача оставлена');
			return `Задача: ${task}`;
		} else {
			console.log('Задача удалена');
			return deleteTask(task);
		}
	}
}
setTask(prompt('Напиши задачу'));

// Завершение задачи
function completeTask(taskDel) {
	taskDel = '';
	console.log(`Завершено задач: ${(comltetedTaskCount += 1)}`);
	return taskDel;
}

// Удаляем задачу
function deleteTask(taskDescription) {
	taskDescription.split(' ').join('') !== '' ? (task = '') : 'Задач нет';
}
