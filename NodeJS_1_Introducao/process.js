var fs = require('fs');

process.on('exit',() => console.log('Bye'));
setTimeout(()=> console.log("setTimeout() " + process.env.PATH));
fs.readFile('file.zip',(err, data) => console.log("I/O callback " + data.length));
process.nextTick(() => console.log("nextTick() " + process.pid));
process.nextTick(() => console.log("nextTick() " + process.title));
console.log(new Date());