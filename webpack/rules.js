const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const babelConfigFile = path.join(__dirname, '..', 'babel.config.js');

const jsRule = {
	test: /\.(js|jsx)$/,
	exclude: /node_modules/,
	use: [
		{
			loader: 'babel-loader',
			options: { configFile: babelConfigFile }
		}
	]
};

const cssRule = {
	test: /\.(css)$/,
	exclude: /node_modules/,
	use: ['css-loader']
};

const sassRule = isServer => {
	const rule = {
		test: /\.(scss|sass)$/,
		exclude: /node_modules/,
		use: ['css-loader', 'sass-loader']
	};

	if (!isServer) {
		rule.use.unshift(MiniCssExtractPlugin.loader);
	}

	return rule;
};

const imageRule = isServer => ({
	test: /\.(png|jpg|jpeg|gif|ico)$/,
	exclude: /node_modules/,
	use: [
		{
			loader: 'file-loader',
			options: {
				publicPath: '/dist/images',
				outputPath: '../images',
				name: '[name].[ext]',
				emitFile: isServer
			}
		}
	]
});

const getRules = (isProd, isServer) => {
	return [jsRule, cssRule, sassRule(isServer), imageRule(isServer)];
};

module.exports = getRules;
