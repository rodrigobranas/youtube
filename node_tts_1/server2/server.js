const http = require("http");

http.createServer((req, res) => {
	res.write("server2");
	res.end();
}).listen(4002);
