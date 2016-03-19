var fs = require('fs');
process.env.UV_THREADPOOL_SIZE = 4;

console.time('file');
var thread = 1;
var count = 1;
while(count <= 6) {
	fs.readFile('./file.mov', function (err, data) {
		console.log("Thread #" + thread++ + " finish");
		console.timeEnd('file');
	});
	count++;
}