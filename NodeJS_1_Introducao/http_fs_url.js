var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer((req, res) => {
	var filename = url.parse(req.url, true).query.filename;
	res.writeHead(200, {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*'
	});
	fs.readFile('photos/' + filename, function (err, data) {
		var photo = data.toString('base64');
		var body = JSON.stringify({data: 'data:image/jpg;base64,' + photo});
		res.write(body);
		res.end();
	});
});

server.listen(3001);