const users = [
	{
		id: 1,
		user: 'Ivan',
		hobby: 'Cooking',
		email: 'qwer@oij.ru',
		phone: 987,
		task: 'Pupa',
	},
	{
		id: 2,
		user: 'Petr',
		hobby: 'Fitness',
		email: 'qwwqqqqr@odasj.ru',
		phone: 999,
		task: 'Pula',
	},
	{
		id: 3,
		user: 'Alexandr',
		hobby: 'Auto',
		email: 'qq@odaww.ru',
		phone: 917,
		task: 'Lupa',
	},
	{
		id: 4,
		user: 'Vanya',
		hobby: 'Run',
		email: 'asdr@oddj.ru',
		phone: 927,
		task: 'Gora',
	},
	{
		id: 5,
		user: 'Masha',
		hobby: 'Fitness',
		email: 'aaaaa@odasj.ru',
		phone: 951,
		task: 'Pora',
	},
	{
		id: 6,
		user: 'Misha',
		hobby: 'Dev',
		email: 'qxxxxr@odasj.ru',
		phone: 952,
		task: 'Papa',
	},
];

export default function SortingTasks() {
	return (
		<>
			<ul className='task-list'>
				{users.map(user => (
					<li key={user.id}>
						<p>Пользователь:{user.user}</p>
						<p>Хобби:{user.hobby}</p>
						<p>Email:{user.email}</p>
						<p>Телефон:{user.phone}</p>
						<p>Задача:{user.task}</p>
					</li>
				))}
			</ul>
		</>
	);
}
