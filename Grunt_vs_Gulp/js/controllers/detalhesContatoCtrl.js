angular.module("listaTelefonica").controller("detalhesContatoCtrl", ["$scope", "contato", function ($scope, contato) {
	$scope.contato = contato.data;
}]);