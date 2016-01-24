var addressBookApp = angular.module('addressBookApp', ['ngRoute']);

addressBookApp.config(function ($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(true)
	$routeProvider
	.when('/', {
		templateUrl : 'views/home.html',
		controller : 'homeController'
	})
	.when('/list', {
		templateUrl : 'views/list.html',
		controller : 'listController'
	})
	.when('/add', {
		templateUrl : 'views/add.html',
		controller : 'addController'
	})
	.otherwise({
		redirectTo: '/'
	});
});

addressBookApp.controller('homeController', function ($scope) {
	$scope.welcomeMessage = 'Welcome to AddressBook App';
});

addressBookApp.controller('listController', function ($scope) {
	$scope.headerMessage = 'Address List';
});

addressBookApp.controller('addController', function ($scope) {
	$scope.headerMessage = 'Add New Address';
});
