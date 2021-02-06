const delayedSum = function (a, b, cb) {
	setTimeout(function () {
		cb(a + b);
	}, 2000);
};

delayedSum(2, 2, function (result) {
	console.log(result);
});
