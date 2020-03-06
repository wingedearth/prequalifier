const path = require('path');
const getRules = require('./webpack/rules');
const getPlugins = require('./webpack/plugins');
const getOptimization = require('./webpack/optimization');

const clientConfigOptions = isProd => {
	const isServer = false;

	return {
		entry: {
			home: path.join(__dirname, 'src/client/Home.js'),
			sadpanda: path.join(__dirname, 'src/client/SadPanda.js')
		},
		output: {
			filename: '[name].js',
			path: path.resolve(__dirname, 'dist', 'client')
		},
		module: {
			rules: getRules(isProd, isServer)
		},
		optimization: getOptimization(),
		plugins: getPlugins(isProd, isServer),
		target: 'web'
	};
};

const serverConfigOptions = isProd => {
	const isServer = true;

	return {
		entry: {
			server: path.join(__dirname, 'src/server/server.js')
		},
		output: {
			filename: '[name].js',
			path: path.resolve(__dirname, 'dist', 'server')
		},
		module: {
			rules: getRules(isProd, isServer)
		},
		optimization: getOptimization(isServer),
		plugins: getPlugins(isProd, isServer),
		target: 'node'
	};
};

const getConfig = isServer => {
	const isProd = process.env.NODE_ENV === 'production';
	const envConfig = isServer ? serverConfigOptions(isProd) : clientConfigOptions(isProd);

	return {
		...envConfig,
		mode: isProd ? 'production' : 'development',
		resolve: {
			alias: {
				'@': path.join(__dirname, 'src')
			},
			extensions: ['.js', '.json', '.jsx', '.scss'],
			modules: ['node_modules']
		},
		watchOptions: {
			ignored: /node_modules/
		}
	};
};

module.exports = getConfig;
