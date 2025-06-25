const title = document.createElement('h1');
title.textContent = 'To-Do List';
document.body.appendChild(title);

const container = document.createElement('div');
container.classList.add('todo-container');
document.body.appendChild(container);

const formAddTasks = document.createElement('form');
formAddTasks.classList.add('todo-form');
formAddTasks.innerHTML = `
	<label for="titleTask">Название задачи:</label>
	<input type="text" id="input-task" placeholder="Срок задачи" name="titleTask"/>
	<label for="deadline">Дедлайн:</label>
	<input type="text" id="input-deadline" placeholder="Дедлайн" name="deadline"/>
	<label for="responsible">Ответственный:</label>
	<input type="text" id="input-responsible" placeholder="Сотрудник" name="responsible"/>
	<button type="submit">Submit</button> 
`;
container.appendChild(formAddTasks);

const taskList = document.createElement('ul');
taskList.classList.add('task-list');
document.body.appendChild(taskList);

const btnSubmit = document.querySelector('button');
const formTitleTask = document.getElementById('input-task');
const formTitleDeadline = document.getElementById('input-deadline');
const formTitleResponsible = document.getElementById('input-responsible');

formAddTasks.addEventListener('submit', function (event) {
	event.preventDefault();

	const taskItem = document.createElement('li');
	taskItem.classList.add('task-item');
	taskItem.setAttribute('id', `${taskList.children.length + 1}`);

	const [title, deadline, responsible] = [
		formTitleTask.value,
		formTitleDeadline.value,
		formTitleResponsible.value,
	];

	taskItem.innerHTML = `
		<p>Название задачи:
		 ${title}</p>
		<p>Дедлайн:
		 ${deadline}</p>
		<p>Ответственный:
		 ${responsible}</p>
		<label for="checkbox">Выполнено</label>
		<input type="checkbox" class="checkbox" id="checkbox${taskItem.id}"/>
	`;

	if (
		[title, deadline, responsible].includes(' ') ||
		[title.length, deadline.length, responsible.length].includes(0)
	) {
		alert('Поле пустое, введите данные');

		return;
	}
	taskList.appendChild(taskItem);

	taskItem.addEventListener('click', function (e) {
		e.target.checked
			? (taskItem.style.backgroundColor = 'lawngreen')
			: (taskItem.style.backgroundColor = '#f9f9f9');
	});
});
