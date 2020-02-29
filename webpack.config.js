const path = require('path');
const getRules = require('./webpack/rules');

module.exports = async () => {
	const isProd = process.env.NODE_ENV === 'production';

	const config = {
		entry: './src/server/server.js',
		target: 'node',
		output: {
			filename: 'server.js',
			path: path.join(__dirname, 'dist', 'server')
		},
		mode: isProd ? 'production' : 'development',
		module: {
			rules: getRules(isProd)
		},
		resolve: {
			alias: {
				'@': path.join(__dirname, 'src')
			},
			extensions: ['.js', '.json', '.jsx', '.scss'],
			modules: ['node_modules']
		}
	};

	return config;
};
