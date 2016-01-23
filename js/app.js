var addressBookApp = angular.module('addressBookApp', ['ngRoute']);

addressBookApp.config(function (locationProvider, $routeProvider) {
	$locationProvider.hashPrefix("!");
	$locationProvider.html5Mode(false)
	$routeProvider
	.when('/', {
		templateUrl : 'index.html',
		controller : 'mainController'
	})
	.when('/list', {
		templateUrl : 'list.html',
		controller : 'listController'
	})
	.when('/add', {
		templateUrl : 'add.html'
		controller : 'addController'
	})
	.otherwise({
		redirectTo: '/';
	});
});

addressBookApp.controller('mainController', function ($scope) {
	debugger;
	$scope.welcomeMessage = 'Welcome My AddressBook App!';
});

addressBookApp.controller('listController', function ($scope) {
	$scope.headerMessage = 'AddressBook List';
});

addressBookApp.controller('addController', function ($scope) {
	$scope.headerMessage = 'Add New Address';
});
