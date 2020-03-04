import React from 'react';
import { renderToString } from 'react-dom/server';
import template from '@/server/template';
import App from '@/components/App';

const getParams = req => ({
	...req.params,
	...req.query
});

export default (req, res, data = {}, Component, options) => {
	const appData = {
		...data,
		params: getParams(req)
	};

	// render App
	const markup = renderToString(<App data={appData} Component={Component} />);

	// inject App into template to create page
	return template(appData, markup, options?.entryName);
};
