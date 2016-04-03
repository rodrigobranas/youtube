var SerialGenerator = require('./serialGenerator');
var serialGeneratorA = new SerialGenerator();
var serialGeneratorB = new SerialGenerator();
console.log(serialGeneratorA === serialGeneratorB);