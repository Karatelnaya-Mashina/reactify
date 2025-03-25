let completedTaskCount = 0;
let completedTasks = [];
let tasks = [];

// объекты для проверки, можно вставить в массив tasks
// {
// 	title: 'Pepsi',
// 	description: 'drink',
// 	isCompleted: false,
// 	creadtedDate: new Date(),
// 	completedDate: 0,
// 	id: 1,
// },
// {
// 	title: 'Coca-cola',
// 	description: 'black water',
// 	isCompleted: false,
// 	creadtedDate: new Date(),
// 	completedDate: 0,
// 	id: 2,
// },

//Проверка, есть ли задачи в массиве
function taskAdd(tasks) {
	if (tasks.length === 0) {
		confirm('Задач нет. Добавим задачу, ок?') ? setTask() : 'Задач нет.';
	}
	return tasks
}
// console.log(taskAdd(tasks));


// Показ задач
function showTask(tasks) {
	for (let task of tasks) {
		console.log(
			`${task.title}. Описание задачи: ${task.description}. Задача поставлена ${task.creadtedDate}. Статус выполнения: ${task.isCompleted}. ID: ${task.id}`
		);
	}
}
// showTask(tasks);

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
	for (let i of completedTasks) {
		i.isCompleted = true;
		i.completedDate = new Date();
		i.creadtedDate = new Date(i.creadtedDate);
		i.leadTime = `Minutes: ${Math.round(
			(i.completedDate.getTime() - i.creadtedDate.getTime()) / (1000 * 60)
		)}`;
	}
	console.log(`Завершено задач: ${(completedTaskCount += 1)}`);
	return completedTasks;
}

// console.log(completeTask(1, tasks));  // 1 заменить на numID

// Удаляем задачу
function deleteTask(index, tasks) {
	let taskIndex = tasks.findIndex(i => i.id === index);
	if (taskIndex !== -1) {
		if (tasks[taskIndex].isCompleted === false) {
			let er = confirm('Задача не выполнена. Удалить задачу, ок?');
			if (er === true) {
				console.log('Задача удалена');
				return tasks.splice(index, 1);
			} else {
				console.log('Отмена. Прежняя задача оставлена');
			}
		}
		return tasks.splice(index, 1);
	}
}
// console.log(deleteTask(1, tasks));

// Очистка списка задач
function clearTasks(arr) {
	while (arr.length !== 0) {
		arr.shift();
	}
	return arr;
}
// console.log(clearTasks(tasks));
