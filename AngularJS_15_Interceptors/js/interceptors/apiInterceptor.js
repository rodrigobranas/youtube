angular.module("listaTelefonica").factory("apiInterceptor", function ($q) {
	return {
		request: function (config) {
			return config;
		},
		responseError: function (rejection) {
			console.log(rejection.config.url);
			return $q.reject(rejection);
		}
	};
});
angular.module("listaTelefonica").config(function ($httpProvider) {
	$httpProvider.interceptors.push("apiInterceptor");
});