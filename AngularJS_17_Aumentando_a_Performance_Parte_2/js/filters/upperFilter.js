angular.module("listaTelefonica").filter("upper", function () {
	var counter = 0;
	return function (input) {
		console.log(counter++);
		if (!input) return;
		return input.toUpperCase();
	};
});