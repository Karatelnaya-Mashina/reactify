let completedTaskCount = 0;
let completedTasks = [];
let tasks = [
	{
		title: 'Pepsi',
		description: 'drink',
		isCompleted: true,
		createdDate: '2025-04-10T15:03:03.517Z',
		completedDate: 0,
		id: 1,
	},
	{
		title: 'Baikal',
		description: 'drinks',
		isCompleted: false,
		createdDate: '2025-04-11T15:03:03.517Z',
		completedDate: 0,
		id: 2,
	},
	{
		title: 'Coca-cola',
		description: 'black water',
		isCompleted: false,
		createdDate: '2025-04-12T15:03:03.517Z',
		completedDate: 0,
		id: 3,
	},
	{
		title: 'Добрый cola',
		description: 'Что?',
		isCompleted: false,
		createdDate: '2025-04-13T15:03:03.517Z',
		completedDate: 0,
		id: 4,
	},
];

const userTask = new Map([
	['Igor', ''],
	['Ivan', ''],
	['Sasha', ''],
	['Dasha', ''],
	['Masha', ''],
]);

// Set уникальных задач
const uniqueCategoryTask = new Set();

function addTasksUniqueList(tasks) {
	tasks.forEach(task => uniqueCategoryTask.add(task));
	return uniqueCategoryTask;
}
// console.log(addTasksUniqueList(tasks));

// Привязка задач к пользователю
function linkUserTask(user, task) {
	return userTask.set(user, task[1]);
}

linkUserTask('Igor', tasks);
// console.log(userTask);

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
	tasks.forEach(({ title, description, createdDate, isCompleted, id }) =>
		console.log(
			` ${title}. Описание задачи: ${description}. Задача поставлена ${createdDate}. Статус выполнения: ${isCompleted}. ID: ${id}`
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
		.filter(date => Date.parse(date.createdDate) > Date.parse(startDate))
		.filter(date => Date.parse(date.createdDate) < Date.parse(endDate));
	let taskShow = isCompleted
		? tasksDateRange.filter(task => task.isCompleted)
		: tasksDateRange;
	return taskShow;
}
// console.log(getTasksByDateRange(tasks, '2025-04-08', '2025-04-12'));

//Добавление задачи в массив tasks
function setTask(task) {
	tasks = [...tasks, ...task];
	return tasks;
}

// let newTasks = [
// 	{
// 		title: prompt('Напишите заголовок задачи'),
// 		description: prompt('Напишите описание задачи') ?? 'описание',
// 		isCompleted: false,
// 		createdDate: new Date(),
// 		completedDate: null ?? 0,
// 		id: crypto.randomUUID(),
// 	},
// 	{
// 		title: prompt('Напишите заголовок задачи'),
// 		description: prompt('Напишите описание задачи') ?? 'описание',
// 		isCompleted: false,
// 		createdDate: new Date(),
// 		completedDate: null ?? 0,
// 		id: crypto.randomUUID(),
// 	},
// ];

// console.log(setTask(newTasks));

// Завершение задачи
function completeTask(index, tasks) {
	let taskComplete = tasks.find(task => task.id === index);

	let obj = JSON.parse(JSON.stringify(taskComplete));
	completedTasks.push(obj);
	completedTasks.forEach(task => {
		task.isCompleted = true;
		task.completedDate = new Date();
		task.createdDate = new Date(task.createdDate);
		task.leadTime = `Minutes: ${Math.round(
			(task.completedDate.getTime() - task.createdDate.getTime()) / (1000 * 60)
		)}`;
	});
	console.log(`Завершено задач: ${(completedTaskCount += 1)}`);
	return completedTasks;
}

// console.log(completeTask(1, tasks)); // 1 заменить на numID

// Удаляем задачу
function deleteTask(index, tasks) {
	let updateListTasks = [];
	let indexDeletedTask = tasks.filter(task => index.includes(task.id));

	if (indexDeletedTask.length === 0) {
		return 'Задача не найдена';
	}

	if (indexDeletedTask.isCompleted) {
		updateListTasks = tasks.filter(task => !index.includes(task.id));
		console.log('Задача удалена');
		return indexDeletedTask;
	} else {
		// let isDelete = confirm('Задача не выполнена. Удалить задачу, ок?');
		let isDelete = true;
		if (isDelete) {
			console.log('Задача удалена');
			updateListTasks = tasks.filter(task => !index.includes(task.id));
			return updateListTasks;
		} else {
			console.log('Отмена. Задача оставлена');
		}
	}
}
// const idTaskDelete = [+prompt('Введите id задач для удаления')]
tasks = deleteTask([1, 2, 4], tasks);
// console.log(tasks);


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

// Экспорт задач
let listExport = new Array();
function exportTasksToJSON(tasks) {
	listExport.push(JSON.stringify(tasks));
	return listExport;
}
// console.log(exportTasksToJSON(tasks));

// Импорт задач

function importTasksFromJSON(tasks) {
	try {
		if (!tasks) throw new Error();
		return JSON.parse(tasks);
	} catch (error) {
		console.log(error.message);
	} finally {
		console.log('Импорт завершен');
	}
}
// console.log(importTasksFromJSON(listExport));
