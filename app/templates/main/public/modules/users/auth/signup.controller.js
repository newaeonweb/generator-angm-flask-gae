(function() {
    'use strict';

	angular
		.module('users')
		.controller('SignupController', SignupController);

    SignupController.$inject = ['$scope', 'Restangular', 'gaAppConfig', 'gaToast', 'gaBrowserHistory', 'gaAuthentication', '_', 'gaTracking', '$state'];

	function SignupController($scope, Restangular, gaAppConfig, gaToast, gaBrowserHistory, gaAuthentication, _, gaTracking, $state) {
        if (gaAuthentication.isLogged()) {
            gaBrowserHistory.back();
        }

        $scope.cfg = gaAppConfig;
        $scope.captchaControl = {};

        $scope.signup = function() {
            $scope.loading = true;
            Restangular.all('auth/signup').post($scope.credentials).then(function(user) {
                if ($scope.cfg.verify_email) {//jscs:disable requireCamelCaseOrUpperCaseIdentifiers
                    gaToast.show('Your account has been created! Please verify your email');
                    $state.go('home');
                } else {
                    gaAuthentication.setUser(user);
                    gaBrowserHistory.back();
                }
                gaTracking.eventTrack('Signup', $scope.credentials.email);
            }, function() {
                _.attempt($scope.captchaControl.reset);
            });
        };
    }

}());
