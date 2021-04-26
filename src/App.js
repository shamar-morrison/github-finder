import Nav from './components/layout/Nav';
import Header from './components/layout/Header';
import UserItem from './components/users/UserItem';
import SearchBar from './components/layout/SearchBar';

const App = () => {
	return (
		<div className="App">
			{/* <Nav /> */}
			<div className="container">
				<Header title={'Search Github'} />
				<br />
				<br />
				<UserItem />
			</div>
		</div>
	);
};

export default App;
