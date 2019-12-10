const http = require("http");

http.createServer((req, res) => {
	res.write("server1");
	res.end();
}).listen(4001);
