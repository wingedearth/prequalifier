import React, { Fragment } from 'react';
import { string } from 'prop-types';
import './App.scss';

const App = ({ title }) => {
	return (
		<Fragment>
			<nav></nav>
			<main>
				<h1>{title}</h1>
				<p>This is a test of the App component.</p>
			</main>
		</Fragment>
	);
};

App.propTypes = {
	title: string
};

export default App;
