import React from 'react';
import { useAppContext } from '@/components/AppContext';
import './Navigation.scss';

const Navigation = () => {
	const { title } = useAppContext();

	return (
		<nav className="navigation">
			<div className="navigation__content">
				<span className="navigation__org">Anissi Bank</span>
				<span className="navigation__page-title">- {title}</span>
			</div>
		</nav>
	);
};

export default Navigation;
