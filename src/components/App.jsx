import React from 'react';
import { func, object } from 'prop-types';
import { AppContext } from './AppContext';
import Navigation from '@/components/navigation/Navigation';
import './App.scss';

const App = ({ Component, data }) => {
	return (
		<AppContext.Provider value={data}>
			<Navigation />
			<Component />
		</AppContext.Provider>
	);
};

App.propTypes = {
	Component: func.isRequired,
	data: object.isRequired
};

export default App;
