console.log('A ' + new Date());
setImmediate(function () {
	console.log('I ' + new Date());
});
console.log('B ' + new Date());