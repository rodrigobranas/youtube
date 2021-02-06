const delayedSum = function (a, b) {
	setTimeout(function () {
		return a + b;
	}, 2000);
};

const result = delayedSum(2, 2);

console.log(result);
