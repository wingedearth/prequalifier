const plugins = [
	'@babel/plugin-proposal-optional-chaining',
	'@babel/plugin-syntax-dynamic-import',
	'@babel/plugin-transform-runtime'
];

const presets = [
	[
		'@babel/env',
		{
			targets: {
				edge: '17',
				firefox: '60',
				chrome: '67',
				safari: '11.1'
			},
			useBuiltIns: 'entry',
			corejs: 3
		}
	]
];

module.exports = {
	plugins,
	presets
};
