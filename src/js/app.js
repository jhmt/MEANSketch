var app = angular.module('app', ['ngResource', 'ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/users', {
		templateUrl: 'list.html', controller: 'ListCtrl'
	}).otherwise({
		redirectTo: '/users'
	});
});

app.factory('User', function($resource) {
	return $resource('/api/users/:_id');
});

app.controller('ListCtrl', function($scope, $route, User) {
	$scope.users = User.query();
	$scope.delete = function(_id) {
		User.delete({_id: _id}, function() {
			$route.reload();
		});
	};
});
