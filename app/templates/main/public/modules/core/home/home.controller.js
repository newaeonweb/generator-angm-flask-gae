(function() {
    'use strict';

    angular
		.module('core')
		.controller('HomeController', HomeController );

    HomeController.$inject = ['$scope'];

	function HomeController($scope) {

		$scope.greeting = 'Welcome to Google App Engine Angular Material Starter!';
    }

}());
