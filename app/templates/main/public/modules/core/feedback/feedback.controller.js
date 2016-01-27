(function() {
    'use strict';

	angular
		.module('core')
		.controller('FeedbackController', FeedbackController );

    FeedbackController.$inject = ['$scope', 'Restangular', 'gaToast', 'gaAppConfig', 'gaAuthentication', 'gaBrowserHistory' ];

	function FeedbackController($scope, Restangular, gaToast, gaAppConfig, gaAuthentication, gaBrowserHistory) {
        var ctrl = this;
        $scope.cfg = gaAppConfig;

        if (!$scope.cfg.has_feedback_form) {//jscs:disable requireCamelCaseOrUpperCaseIdentifiers
            gaBrowserHistory.back();
        }

        ctrl.resetForm = function() {
            $scope.feedback = {
                email : gaAuthentication.user.email || ''
            };
        };

        $scope.sendFeedback = function() {
            Restangular.all('feedback').post($scope.feedback).then(function() {
                gaToast.show('Thank you for your feedback!');
                gaBrowserHistory.back();
            });
        };

        ctrl.resetForm();
    }

}());
