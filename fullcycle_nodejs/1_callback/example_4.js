const delayedSum = function (a, b, cb) {
	setTimeout(function () {
		cb(a + b);
	}, 500);
};

console.time('performance');
delayedSum(2, 2, function (a) {
	delayedSum(4, 4, function (b) {
		delayedSum(a, b, function (result) {
			console.log(result);
			console.timeEnd('performance');
		});
	});
});
