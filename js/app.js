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
	$scope.addressList = [
	  {
		"name": "Madden Faulkner",
		"phone": "+1 (835) 490-3623",
		"address": "249 Voorhies Avenue, Gracey, Maine, 6156"
	  },
	  {
		"name": "Estelle Valdez",
		"phone": "+1 (924) 418-2616",
		"address": "968 Kosciusko Street, Mulino, New Hampshire, 3294"
	  },
	  {
		"name": "Gertrude Brewer",
		"phone": "+1 (980) 444-2888",
		"address": "580 Buffalo Avenue, Ellerslie, Massachusetts, 8333"
	  },
	  {
		"name": "Jill Meyer",
		"phone": "+1 (993) 598-3597",
		"address": "586 Richardson Street, Lithium, Pennsylvania, 1327"
	  },
	  {
		"name": "Dorothea Wheeler",
		"phone": "+1 (831) 587-2436",
		"address": "606 Fane Court, Cresaptown, Washington, 1705"
	  },
	  {
		"name": "Hillary Newman",
		"phone": "+1 (906) 465-3965",
		"address": "802 Seigel Street, Monument, South Carolina, 9548"
	  }]
});

addressBookApp.controller('addController', function ($scope) {
	$scope.headerMessage = 'Add New Address';
});
