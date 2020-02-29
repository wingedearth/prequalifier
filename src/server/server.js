import 'core-js/stable';
import 'regenerator-runtime/runtime';
import express from 'express';
import router from './router';

const server = express();
const port = process.env.PORT || 4000;

// Static paths
server.use('/dist', express.static('dist'));
server.use('/dist', express.static('dist/client'));
server.use('/dist', express.static('dist/server'));

server.use(router);

// Catch and log uncaught errors from app
server.on('error', err => {
	console.error(err);
});

server.listen(port, () => {
	console.log(`A goblin-mage has conjured a server on port ${port}.`);
});
