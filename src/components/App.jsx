import React from 'react';
import { string } from 'prop-types';
import './App.scss';

const App = ({ title }) => {
	return (
		<main>
			<nav></nav>
			<h1>{title}</h1>
			<p>This is a test of the App component.</p>
		</main>
	);
};

App.propTypes = {
	title: string
};

export default App;
