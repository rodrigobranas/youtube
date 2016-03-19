var http = require('http');
var fs = require('fs');

var toBase64 = function (data) {
	return 'data:image/jpg;base64,' + data.toString('base64');
};

var server = http.createServer((req, res) => {
	res.writeHead(200, {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*'
	});
	var dir = 'photos/';
	var data1 = fs.readFile(dir + '1.jpg');
	var data2 = fs.readFile(dir + '2.jpg');
	var data3 = fs.readFile(dir + '3.jpg');
	var data4 = fs.readFile(dir + '4.jpg');
	var data5 = fs.readFile(dir + '5.jpg');
	var data6 = fs.readFile(dir + '6.jpg');
	var body = JSON.stringify([
		{
			filename: '1.jpg',
			data: toBase64(data1)
		},
		{
			filename: '2.jpg',
			data: toBase64(data2),
		},
		{
			filename: '3.jpg',
			data: toBase64(data3),
		},
		{
			filename: '4.jpg',
			data: toBase64(data4),
		},
		{
			filename: '5.jpg',
			data: toBase64(data5),
		},
		{
			filename: '6.jpg',
			data: toBase64(data6)
		}
	]);		
	res.write(body);
	res.end();
});

server.listen(3000);