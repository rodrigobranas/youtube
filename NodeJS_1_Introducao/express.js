var express = require('express');
var fs = require('fs');
var app = express();

app.get('/photos', function (req, res) {
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

app.get('/photos/:id', function (req, res) {
	var id = req.params.id;
	res.writeHead(200, {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*'
	});
	fs.readFile('photos/' + id + '.jpg', function (err, data) {
		var photo = data.toString('base64');
		var body = JSON.stringify({data: 'data:image/jpg;base64,' + photo});
		res.write(body);
		res.end();
	});
});

app.listen(3000);