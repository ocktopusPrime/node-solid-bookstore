import { Router } from 'solid-app-router';
import type { Component } from 'solid-js';

import './App.scss';
import { Bookstore } from './Components/Bookstore';

export const mongo =
	process.env.NODE_ENV === 'production'
		? 'https://bookstore-green-team.herokuapp.com/'
		: 'http://localhost:5000';

const App: Component = () => {
	return (
		<Router>
			<div>
				<Bookstore />
			</div>
		</Router>
	);
};

export default App;
