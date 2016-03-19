var isPrime = require('./number-util').isPrime;

console.time('primes');
var number = 0;
var numberOfPrimes = 0;
while(true) {
    if(isPrime(++number)) numberOfPrimes++;
    if(numberOfPrimes === 1000000) break;
}
console.log(number);
console.timeEnd('primes');