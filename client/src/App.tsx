import type { Component } from 'solid-js';
import { Router } from 'solid-app-router';
import { Bookstore } from './Components/Bookstore';

import './App.scss';

export const mongo =
	process.env.NODE_ENV === 'production'
		? 'https://bookstore-green-team.herokuapp.com'
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
