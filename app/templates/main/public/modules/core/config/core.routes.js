(function() {
    'use strict';

    angular
		.module('core')
		.config(config);

	config.$inject = ['$stateProvider', '$urlRouterProvider'];

	function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url         : '/',
                controller  : 'HomeController',
                templateUrl : '/p/modules/core/home/home.html'
            })
            .state('feedback', {
                url         : '/feedback',
                controller  : 'FeedbackController',
                templateUrl : '/p/modules/core/feedback/feedback.html'
            });
    }

}());
