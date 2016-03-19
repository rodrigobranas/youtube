var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
	res.writeHead(200, {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*'
	});
	fs.readdir('photos/', function (err, data) {
		var photos = data.map(function (photo) {
			return {filename: photo};
		});
		var body = JSON.stringify(photos);
		res.write(body);
		res.end();
	});
});

server.listen(3000);