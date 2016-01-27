(function() {
    'use strict';

    angular
		.module('core')
		.controller('HeaderController', HeaderController);

    HeaderController.$inject = ['$scope', 'gaAppConfig', 'gaAuthentication', '$mdSidenav'];

	function HeaderController($scope, gaAppConfig, gaAuthentication, $mdSidenav) {
        $scope.cfg = gaAppConfig;
        $scope.auth = gaAuthentication;
        $scope.user = gaAuthentication.user;

        $scope.toggleSidenav = function() {
            $mdSidenav('leftSidenav').toggle();
        };
    }

}());
