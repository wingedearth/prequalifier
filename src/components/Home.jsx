import React from 'react';
import { useAppContext } from './AppContext';

const Home = () => {
	const { title } = useAppContext();

	return (
		<main>
			<h1>{title}</h1>
			<p>This is a test of the Home component.</p>
		</main>
	);
};

export default Home;
