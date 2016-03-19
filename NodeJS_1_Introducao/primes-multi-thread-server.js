var cluster = require('cluster');
var http = require('http');
var isPrime = require('./number-util').isPrime;

if (cluster.isMaster) {
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
    return;
}

var count = 1;
var server = http.createServer(function (req, res) {
	console.log('Primes #' + count++ + " @ " + process.pid);
	console.time('primes');
	var number = 0;
	var numberOfPrimes = 0;
	while(true) {
    	if(isPrime(++number)) numberOfPrimes++;
    	if(numberOfPrimes === 1000000) break;
	}
	res.end("Number: " + number);
	console.timeEnd('primes');
});

server.listen(3000);