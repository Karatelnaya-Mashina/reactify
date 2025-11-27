import { capitalizeText } from '../helpers/formatText.js';
// import { fetch } from '../api/fetchData.js';
import Wrapper from '../components/Wrapper.jsx';
import Name from '../components/Name.jsx';
import City from '../components/City.jsx';
import Contacts from '../components/Contacts.jsx';
import Profile from '../components/Profile.jsx';
import TaskList from '../components/TaskList.jsx';
import ProductList from '../components/ProductList.jsx';
import { isLoggedIn } from '../components/UserStatus.jsx';

export default function Home() {
	if (isLoggedIn) {
		return (
			<div className='Home'>
				<h1>{capitalizeText('Hello, Vite + React!')}</h1>
				<Wrapper />
				<Name />
				<City />
				<Contacts />
				<Profile />
				<TaskList />
				<ProductList />
			</div>
		);
	} else {
		return <div>Зарегистрируйтесь для отображения информации</div>;
	}
}
