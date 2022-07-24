import { Router } from 'solid-app-router';
import type { Component } from 'solid-js';

import './App.scss';
import { Bookstore } from './Components/Bookstore';

export const mongo =
	process.env.NODE_ENV === 'production'
		? 'https://charts.mongodb.com/charts-bookstore-jglhi/embed/charts?id=62d844b9-f1eb-4b9c-8f8f-568118f260e6&maxDataAge=60&theme=dark&autoRefresh=true'
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
