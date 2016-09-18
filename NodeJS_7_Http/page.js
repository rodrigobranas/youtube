var http = require('http');

http.createServer(function (req, res) {
	res.write(
		'<html>' + 
			'<head>' + 
				'<title>Hello World</title>' + 
			'</head>' +
			'<body>' + 
				'<h1>Hello World</h1>' +
			'</body>' + 
		'</html>'
	);
	res.end();
}).listen(3412);