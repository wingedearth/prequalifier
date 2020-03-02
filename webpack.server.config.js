const getConfig = require('./webpack.config');
const isServer = true;

module.exports = getConfig(isServer);
