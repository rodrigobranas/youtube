var isPrime = function(number) {
    if(number < 2) return false;
    for (var i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
        if(number % i === 0) return false;
    }
    return true;
};
  
module.exports = {
  isPrime: isPrime
};