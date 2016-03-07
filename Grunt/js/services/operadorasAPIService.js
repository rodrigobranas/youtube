angular.module("listaTelefonica").service("operadorasAPI", ["$http", "config", function ($http, config) {
	this.getOperadoras = function () {
		return $http.get(config.baseUrl + "/operadoras");
	};
}]);