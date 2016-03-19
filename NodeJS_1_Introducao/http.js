var http = require('http');

var server = http.createServer((req, res) => {
	res.writeHead(200, {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*'
	});
	var photos = [
		{filename: '1.jpg'},
		{filename: '2.jpg'},
		{filename: '3.jpg'},
		{filename: '4.jpg'},
		{filename: '5.jpg'},
		{filename: '6.jpg'}
	];
	var body = JSON.stringify(photos);
	res.write(body);
	res.end();
});

server.listen(3000);