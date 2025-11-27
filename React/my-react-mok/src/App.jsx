import MoviesList from './MoviesList.jsx';
import './App.css';

export default function App() {
	return (
		<div>
			<MoviesList />
		</div>
	);
}

// const tasks = ['HTML', 'CSS', 'JavaScript']




// import React from "react";
// import {useState} from 'react'

// export default function App() {

//     const [tasks, setTasks] = useState(['HTML', 'CSS', 'JavaScript'])
//     const [completedTasks, setCompletedTasks] = useState(0)

//     return (
//         <>
//             <TasksCounter tasks={tasks.length} completedTasks={completedTasks} />
//             <AddTaskInput setTasks={setTasks} />
//             <TasksList tasks={tasks} setCompletedTasks={setCompletedTasks} />
//         </>
//     )
// }

// export function TasksList({ tasks, setCompletedTasks }) {
    
//     return (
//         <ul >
//             {tasks.map(task => (
//                 <ListItem key={task} task={task} setCompletedTasks={setCompletedTasks} />
//             ))}
//         </ul>
//     )
// }

// export function ListItem({ task, setCompletedTasks }) {
//     const [checkbox, setCheckbox] = useState(false);

//     function handleToggle() {
//         setCheckbox((prev) => {
//             const next = !prev

//             setCompletedTasks(prev => prev + (next ? 1 : -1))

//             return next
//         });
//     }

//     return (
//         <div style={{ display: 'flex' }}>
//             <input type='checkbox' checked={checkbox} onChange={handleToggle}
//                 onClick={(e) => e.stopPropagation()}/>
//             <li style={{ listStyle: 'none', textDecoration: checkbox ? "line-through" : "none", }}>{task}</li>
//         </div>
//     )
// }

// export function TasksCounter({tasks, completedTasks}) {
//     return (<>
//         <div>Всего задач: {tasks}</div>
//         <div>Выполненных задач: {completedTasks}</div></>)
// }

// export function AddTaskInput({ setTasks }) {
//     function handleClick() {
        
//         setTasks(prev => [...prev, inputValue])
//         setInputValue('')
//     }

//     const [inputValue, setInputValue] = useState(null)

//     return (<>
//         <input value={inputValue} type='text' onChange={(event) => setInputValue(event.target.value)} />
//         <button onClick={handleClick}>Добавить</button >
//         </>)
// }

