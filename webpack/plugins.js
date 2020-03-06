const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob');

const purgePaths = {
	src: path.join(__dirname, '..', 'src')
};

const clientPlugins = [
	new MiniCssExtractPlugin({
		filename: '[name].css',
		chunkFilename: '[id].css',
		ignoreOrder: true
	}),
	new OptimizeCssAssetsPlugin({
		cssProcessorOptions: {
			map: {
				inline: false,
				annotation: true
			}
		},
		cssProcessorPluginOptions: {
			preset: ['default']
		}
	}),
	new PurgecssPlugin({
		paths: glob.sync(`${purgePaths.src}/**/*`, { nodir: true })
	})
];

const serverPlugins = [
	new CleanWebpackPlugin({
		verbose: true
	})
];

/**
 * @function getPlugins
 * @param {Boolean} isProd
 * @param {Boolean} [isServer]
 * @returns {Function}
 */
const getPlugins = (isProd, isServer) => {
	const basePlugins = [
		// This will map generated filenames when hashed
		new WebpackAssetsManifest({
			entrypoints: true,
			publicPath: true,
			writeToDisk: true
		})
	];

	return isServer ? [...basePlugins, ...serverPlugins] : [...basePlugins, ...clientPlugins];
};

module.exports = getPlugins;
