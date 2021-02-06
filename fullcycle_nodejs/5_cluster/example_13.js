import http from 'http';

const fibonacci = function (n) {
	return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
};

http.createServer((req, res) => {
	res.writeHead(200);
	const result = fibonacci(42);
	res.write(`worker ${process.pid}: ${result.toString()}`);
	res.end();
}).listen(8000);