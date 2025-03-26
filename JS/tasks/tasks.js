// Удаляем задачу
function deleteTask(index, tasks) {
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

console.log(deleteTask(1, tasks));









