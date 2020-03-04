import serialize from 'serialize-javascript';

/**
 * @function getScriptTags
 * @description takes an array of filenames and creates a string including a script tag to import each javascript file referenced by name
 * @param {array} files - file names
 * @returns {string}
 */
export const getScriptTags = files =>
	files.map(file => `<script type="text/javascript" src="/${file}"></script>`).join('\n');

/**
 * @function getStyleTags
 * @description takes an array of filenames and creates a string including a link tag to import each css file referenced by name
 * @param {Array} files - file names
 * @returns {Array}
 */
export const getStyleTags = files =>
	files.map(file => `<link rel="stylesheet" href="/${file}"></link>`).join('\n');

const template = (data, markup, entryName) => {
	// import manifest on every server reload
	const manifest = require('../../dist/client/manifest.json');

	const { title } = data;

	const entry = manifest?.entrypoints?.[entryName];
	const scriptTags = getScriptTags(entry?.js);
	const styleTags = getStyleTags(entry?.css);

	return `
	<!DOCTYPE html>
		<html>
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1">
				<title>${title}</title>
				<link href="https://fonts.googleapis.com/css?family=Cabin:400,600,700|Heebo:400,700,900|Noto+Sans+TC:400,700,900&display=swap" rel="stylesheet">
				${styleTags}
			</head>
			<body>
				<div id="root">${markup}</div>
				<script>window.__INITIAL_STATE__ = ${serialize(data)}</script>
				${scriptTags}
			</body>
		</html>`;
};

export default template;
