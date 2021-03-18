import Hapi from '@hapi/hapi';
import hapiRouteAdapter from '../adapter/hapiRouteAdapter.js';
import * as postController from '../controller/postController.js';

const server = Hapi.server({
	port: 3000,
	host: 'localhost'
});

server.route({
	method: 'GET',
	path: '/posts',
	handler: hapiRouteAdapter(postController.getPosts)
});

server.route({
	method: 'POST',
	path: '/posts',
	handler: hapiRouteAdapter(postController.savePost)
});

server.start();
