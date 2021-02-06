const delayedSum = function (a, b) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve(a + b);
		}, 500);
	});
};

console.time('performance');
const a = delayedSum(2, 2);
const b = delayedSum(4, 4);
const result = delayedSum(a, b)
console.log(result);
console.timeEnd('performance');
