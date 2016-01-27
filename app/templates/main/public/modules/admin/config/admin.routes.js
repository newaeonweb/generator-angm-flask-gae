(function () {
	'use strict';

	angular
		.module('admin')
		.config(config);

	config.$inject = ['$stateProvider'];

	function config($stateProvider) {
		$stateProvider
			.state('admin', {
				url: '/admin',
				abstract: true,
				controller: 'AdminController',
				templateUrl: '/p/modules/admin/layout/admin.view.html'
			})
			.state('admin.appConfig', {
				url: '/config',
				controller: 'AdminAppConfigController',
				templateUrl: '/p/modules/admin/app-config/app-config.html'
			});
	}

}());
