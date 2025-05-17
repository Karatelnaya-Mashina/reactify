let completedTaskCount = 0;
let completedTasks = [];
let tasks = [
	{
		userId: 11,
		id: 201,
		title: 'Pepsi',
		description: 'drink',
		completed: true,
		createdDate: '2025-04-10T15:03:03.517Z',
		completedDate: 0,
	},
	{
		userId: 11,
		id: 202,
		title: 'Baikal',
		description: 'drinks',
		completed: false,
		createdDate: '2025-04-11T15:03:03.517Z',
		completedDate: 0,
	},
	{
		userId: 11,
		id: 203,
		title: 'Coca-cola',
		description: 'black water',
		completed: false,
		createdDate: '2025-04-12T15:03:03.517Z',
		completedDate: 0,
	},
	{
		userId: 11,
		id: 204,
		title: 'Добрый cola',
		description: 'Что?',
		completed: false,
		createdDate: '2025-04-13T15:03:03.517Z',
		completedDate: 0,
	},
];

let users = [];

// Получение задач
async function getTasks(url) {
	try {
		const responseArrTasks = await fetch(url);

		if (!responseArrTasks.ok) {
			throw new Error(response.status);
		}
		const dataTasks = await responseArrTasks.json();
		tasks = [...dataTasks, ...tasks];
	} catch {
		console.error('Error >>>', error);
	}
}
getTasks('https://jsonplaceholder.typicode.com/todos');

// Получения списка пользователей
async function getUsers(url) {
	try {
		const responseArrUsers = await fetch(url);
		if (!responseArrUsers.ok) {
			throw new Error(responseArrUsers.status);
		}
		const dataUsers = await responseArrUsers.json();
		users = [...dataUsers, ...users];
	} catch {
		console.error('Error >>>', error);
	}
}

getUsers('https://jsonplaceholder.typicode.com/users');

// Получение задачи по её id

async function getTaskById(id) {
	const responseID = await fetch(
		`https://jsonplaceholder.typicode.com/todos/${id}`
	);
	const dataID = await responseID.json();
	console.log(dataID);
}

// getTaskById(1);

// Привязка задач к пользователю
let userTasks = new Map();

function LinkingTasksToUser(id) {
	setTimeout(() => {
		userTasks.set(users[id - 1].name, tasks[id - 1].title);
	}, 2000);
}

LinkingTasksToUser(1);
// setTimeout(() => {
// 	console.log(userTasks);
// }, 2000);

// Set уникальных задач
const uniqueCategoryTask = new Set();

function addTasksUniqueList(tasks) {
	tasks.forEach(task => uniqueCategoryTask.add(task));
	return uniqueCategoryTask;
}
// console.log(addTasksUniqueList(tasks));

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
	tasks.forEach(({ title, description, createdDate, completed, id }) =>
		console.log(
			` ${title}. Статус выполнения: ${completed}. ID: ${id}`

			// ` ${title}. Описание задачи: ${description}. Задача поставлена ${createdDate}. Статус выполнения: ${completed}. ID: ${id}`
		)
	);
}
// showTask(tasks);

//Показ описания задач
function getTaskDescriptions(arr) {
	return arr.map(task => task.description);
}

// console.log(getTaskDescriptions(tasks));

// Фильтр задач по длине
function getLongTasks(task) {
	return task.filter(len => len.description.length > 10);
}

// console.log(getLongTasks(tasks));

// Показ задач в определенном временном диапазоне
function getTasksByDateRange(tasks, startDate, endDate, completed = false) {
	let tasksDateRange = tasks
		.filter(date => Date.parse(date.createdDate) > Date.parse(startDate))
		.filter(date => Date.parse(date.createdDate) < Date.parse(endDate));
	let taskShow = completed
		? tasksDateRange.filter(task => task.completed)
		: tasksDateRange;
	return taskShow;
}
// console.log(getTasksByDateRange(tasks, '2025-04-08', '2025-04-12'));

//Добавление задачи в массив tasks
// const newTasks = [
// 	{
// 		title: "prompt('Напишите заголовок задачи')",
// 		description: "prompt('Напишите описание задачи')" ?? 'описание',
// 		completed: false,
// 		createdDate: new Date(),
// 		completedDate: null ?? 0,
// 	},
// 	{
// 		title: "prompt('Напишите заголовок задачи')",
// 		description: "prompt('Напишите описание задачи')" ?? 'описание',
// 		completed: false,
// 		createdDate: new Date(),
// 		completedDate: null ?? 0,
// 	},
// ];

// const newTasks = '';
// const setTask = (task => {
// 	let idTask = tasks.slice(-1)[0].id + 1;
// 	if (task.length > 0) {
// 		tasks = [...tasks, ...task];
// 	}
// 	tasks.forEach(task => (!task.id ? (task['id'] = idTask++) : task));
// 	console.log(tasks);
// })(newTasks);

// Завершение задачи
async function updateTask(taskId, updatedTask) {
	fetch(`https://jsonplaceholder.typicode.com/todos/${taskId}`, {
		method: 'PUT',
		body: JSON.stringify({
			completed: updatedTask,
		}),
		headers: { 'Content-type': 'application/json' },
	})
		.then(response => {
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			return response.json();
		})
		.then(data => console.log(data))
		.catch(error => console.error('Error >>>', error));
}
// updateTask(2, true);

// Удаляем задачу
function deleteTask(index, tasks) {
	let updateListTasks = [];
	let indexDeletedTask = tasks.filter(task => index.includes(task.id));

	if (indexDeletedTask.length === 0) {
		return 'Задача не найдена';
	}

	if (indexDeletedTask.completed) {
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
// tasks = deleteTask([1, 2, 4], tasks);
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

function remindAboutTask(id, seconds) {
	setTimeout(function () {
		tasks.forEach(task => {
			if (task.id === id && !task.completed)
				console.log(`${task.title}, задача еще не выполнена!`);
		});
	}, 1000);
}

// remindAboutTask(2, 0);

function countdownToDeadline(id, secondsToDeadline) {
	id = setInterval(() => {
		console.log(secondsToDeadline--);
		if (secondsToDeadline < 0) {
			console.log('Время вышло');
			clearInterval(id);
		}
	}, 0);
}

// countdownToDeadline(2, 10);

// Post запрос

async function postTask(task) {
	try {
		const responsePost = await fetch(
			'https://jsonplaceholder.typicode.com/todos',
			{
				method: 'POST',
				headers: { 'Content-type': 'application/json' },
				body: JSON.stringify(task),
			}
		);
		const data = await responsePost.json();
		console.log(data);
	} catch (error) {
		console.error('Error', error);
	}
}
const taska = {
	userId: 11,
	id: 205,
	title: 'Alga Alga Turalga',
	completed: false,
};
// postTask(taska);

async function deleteTask(id) {
	fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
		method: 'DELETE',
	});
}
deleteTask(1);
