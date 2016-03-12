angular.module("listaTelefonica").config(["serialGeneratorProvider", function (serialGeneratorProvider) {
	serialGeneratorProvider.setLength(5);
}]);