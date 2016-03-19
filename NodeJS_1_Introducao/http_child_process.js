var http = require('http');
var childProcess = require('child_process');

var server = http.createServer((req, res) => {
	res.writeHead(200, {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*'
	});
	childProcess.exec('ls photos/', function (err, data) {
		var photos = data.split('\n').map(function (filename) {
			return {
				filename: filename
			};
		});
		var body = JSON.stringify(photos);
		res.write(body);
		res.end();
	});
});

server.listen(3000);