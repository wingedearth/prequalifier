import serialize from 'serialize-javascript';
import manifest from '../../dist/client/manifest.json';

/**
 * @function injectJS
 * @description takes an array of filenames and creates a string including a script tag to import each javascript file referenced by name
 * @param {array} files - file names
 * @returns {string}
 */
export const injectJS = files =>
	files.map(file => `<script type="text/javascript" src="/${file}"></script>`).join('\n');

/**
 * @function injectCSS
 * @description takes an array of filenames and creates a string including a link tag to import each css file referenced by name
 * @param {Array} files - file names
 * @returns {Array}
 */
export const injectCSS = files =>
	files.map(file => `<link rel="stylesheet" href="/${file}"></link>`).join('\n');

const template = (data, markup) => {
	const { title } = data;
	const entrypoints = manifest?.entrypoints;
	const jsFiles = entrypoints?.main?.js;
	const cssFiles = entrypoints?.main?.css;

	return `
	<!DOCTYPE html>
		<html>
			<head>
				<meta charset="UTF-8">
				<title>${title}</title>
				<link href="https://fonts.googleapis.com/css?family=Cabin|Heebo|Noto+Sans+TC&display=swap" rel="stylesheet"> 
				${injectCSS(cssFiles)}
			</head>
			<body>
				<div id="root">${markup}</div>
				<script>window.__INITIAL_STATE__ = ${serialize(data)}</script>
				${injectJS(jsFiles)}
			</body>
		</html>`;
};

export default template;
