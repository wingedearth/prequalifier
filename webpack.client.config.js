const getConfig = require('./webpack.config');
const isServer = false;

module.exports = getConfig(isServer);
