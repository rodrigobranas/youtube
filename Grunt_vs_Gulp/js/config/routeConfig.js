angular.module("listaTelefonica").config(["$routeProvider", function ($routeProvider) {
	$routeProvider.when("/contatos", {
		templateUrl: "view/contatos.html",
		controller: "listaTelefonicaCtrl",
		resolve: {
			contatos: ["contatosAPI", function (contatosAPI) {
				return contatosAPI.getContatos();
			}],
			operadoras: ["operadorasAPI", function (operadorasAPI) {
				return operadorasAPI.getOperadoras();
			}]
		}
	});
	$routeProvider.when("/novoContato", {
		templateUrl: "view/novoContato.html",
		controller: "novoContatoCtrl",
		resolve: {
			operadoras: ["operadorasAPI", function (operadorasAPI) {
				return operadorasAPI.getOperadoras();
			}]
		}
	});
	$routeProvider.when("/detalhesContato/:id", {
		templateUrl: "view/detalhesContato.html",
		controller: "detalhesContatoCtrl",
		resolve: {
			contato: ["contatosAPI", "$route", function (contatosAPI, $route) {
				return contatosAPI.getContato($route.current.params.id);
			}]
		}
	});
	$routeProvider.otherwise({redirectTo: "/contatos"});
}]);