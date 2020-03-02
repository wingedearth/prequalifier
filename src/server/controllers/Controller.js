import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '@/components/App';
import template from '@/server/template';

const edition = 'us';
const title = 'Prequalifer';

const getParams = req => ({
	...req.params,
	...req.query
});

/**
 * @function Controller
 * @description Main Express Controller
 * @param {Object} req - Express request
 * @param {Object} res - Express response
 */
const Controller = (req, res) => {
	// build page data
	const data = {
		edition,
		params: getParams(req),
		title
	};

	// render App
	const markup = renderToString(<App {...data} />);

	// inject App into template to create page
	const page = template(data, markup);

	// send page
	res.send(page);
};

export default Controller;
