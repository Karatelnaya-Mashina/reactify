let completedTaskCount = 0;
let completedTasks = [];
let tasks = [
	{
		title: 'Pepsi',
		description: 'drink',
		isCompleted: true,
		creadtedDate: '2025-04-10T15:03:03.517Z',
		completedDate: 0,
		id: 1,
	},
	{
		title: 'Baikal',
		description: 'drinks',
		isCompleted: false,
		creadtedDate: '2025-04-11T15:03:03.517Z',
		completedDate: 0,
		id: 2,
	},
	{
		title: 'Coca-cola',
		description: 'black water',
		isCompleted: false,
		creadtedDate: '2025-04-12T15:03:03.517Z',
		completedDate: 0,
		id: 3,
	},
	{
		title: 'Добрый cola',
		description: 'Что?',
		isCompleted: false,
		creadtedDate: '2025-04-13T15:03:03.517Z',
		completedDate: 0,
		id: 4,
	},
];

//Проверка, есть ли задачи в массиве
function taskAdd(tasks) {
	if (tasks.length === 0) {
		confirm('Задач нет. Добавим задачу, ок?') ? setTask() : 'Задач нет.';
	}
	return tasks;
}
// console.log(taskAdd(tasks));

// Показ задач
function showTask(tasks) {
	tasks.forEach(task =>
		console.log(
			`${task.title}. Описание задачи: ${task.description}. Задача поставлена ${task.creadtedDate}. Статус выполнения: ${task.isCompleted}. ID: ${task.id}`
		)
	);
}
// showTask(tasks);

//Показ описания задач
function getTaskDescriptions(arr) {
	return arr.map(descrip => descrip.description);
}

// console.log(getTaskDescriptions(tasks));

// Фильтр задач по длине
function getLongTasks(task) {
	return task.filter(len => len.description.length > 10);
}

// console.log(getLongTasks(tasks));

// Показ задач в определенном временном диапазоне
function getTasksByDateRange(tasks, startDate, endDate, isCompleted = false) {
	let tasksDateRange = tasks
		.filter(date => Date.parse(date.creadtedDate) > Date.parse(startDate))
		.filter(date => Date.parse(date.creadtedDate) < Date.parse(endDate));
	let taskShow = isCompleted
		? tasksDateRange.filter(task => task.isCompleted)
		: tasksDateRange;
	return taskShow;
}
// console.log(getTasksByDateRange(tasks, '2025-04-08', '2025-04-12'));

//Добавление задачи в массив tasks
function setTask() {
	let task = {
		title: prompt('Напишите заголовок задачи'),
		description: prompt('Напишите описание задачи'),
		isCompleted: false,
		creadtedDate: new Date(),
		completedDate: 0,
		id: crypto.randomUUID(),
	};
	tasks.push(task);
	return tasks;
}
// console.log(setTask());

// Завершение задачи
function completeTask(index, tasks) {
	let taskComplete = tasks.find(task => task.id === index);
	let obj = JSON.parse(JSON.stringify(taskComplete));
	completedTasks.push(obj);
	completedTasks.forEach(task => {
		task.isCompleted = true;
		task.completedDate = new Date();
		task.creadtedDate = new Date(task.creadtedDate);
		task.leadTime = `Minutes: ${Math.round(
			(task.completedDate.getTime() - task.creadtedDate.getTime()) / (1000 * 60)
		)}`;
	});
	console.log(`Завершено задач: ${(completedTaskCount += 1)}`);
	return completedTasks;
}

// console.log(completeTask(2, tasks)); // 1 заменить на numID

// Удаляем задачу
function deleteTask(tasks, index) {
	let taskIndex = tasks.findIndex(i => i.id === index);

	if (taskIndex === -1) {
		console.log('Задача не найдена');
		return;
	}

	if (tasks[taskIndex].isCompleted) {
		return tasks.splice(index, 1);
	} else {
		let isDelete = confirm('Задача не выполнена. Удалить задачу, ок?');
		if (isDelete) {
			console.log('Задача удалена');
			return tasks.splice(index, 1);
		} else {
			console.log('Отмена. Задача оставлена');
		}
	}
}
// console.log(deleteTask(1, tasks));

// Удаляем задачу длинной менее 5 символов
const clearShortTasks = task => task.filter(len => len.description.length < 5);
// console.log(clearShortTasks(tasks));

// Очистка списка задач
const clearTasks = arr => (arr = []);
// console.log(clearTasks(tasks));

// Обновление заголовков задач

function updateTitleTasks(str, idTask) {
	return (tasks.find(task => task.id === idTask).title = str);
}
// console.log(updateTitleTasks('СССР Soda', 2));
