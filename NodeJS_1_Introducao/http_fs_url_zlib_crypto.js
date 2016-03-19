var http = require('http');
var fs = require('fs');
var url = require('url');
var zlib = require('zlib');
var crypto = require('crypto');

var server = http.createServer((req, res) => {
	var filename = url.parse(req.url, true).query.filename;
	res.writeHead(200, {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Content-Encoding': 'gzip'
	});
	fs.readFile('photos/' + filename, (err, data) => {
		var photo = 'data:image/jpg;base64,' + data.toString('base64');
		var body = JSON.stringify({
			data: photo,
			checksum: crypto.createHash('md5').update(photo).digest('hex')
		});
		zlib.gzip(new Buffer(body, 'utf-8'), (err, data) => {
			res.write(data);
			res.end();
		});
	});
});

server.listen(3001);