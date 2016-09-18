var http = require('http');

var createRouter = function (port) {
	var api = {};
	var routes = {};
	var methods = ['GET', 'POST'];

	methods.forEach(function (method) {
		routes[method] = {};
		api[method.toLowerCase()] = function (path, fn) {
			routes[method][path] = fn;
		};
	});

	http.createServer(function (req, res) {
		res.setHeader('Access-Control-Allow-Origin', '*');
		if (!routes[req.method][req.url]) return res.end();
		routes[req.method][req.url](req, res);
	}).listen(port);

	return api;
};

module.exports = createRouter;