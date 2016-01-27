(function() {
    'use strict';

	angular
		.module('core')
		.factory('gaTracking', gaTracking);

    /**
     * @name gaToast
     * @memberOf angularModule.core
     * @description
     * Service responsible tracking user's activity on page
     * Currenly works only with Google Analytics
     */

    gaTracking.$inject = ['$analytics'];

	function gaTracking($analytics) {

        return {
            eventTrack : function(eventName, label, category) {
                $analytics.eventTrack(eventName, {
                    label     : label,
                    categoory : category
                });
            }
        };

    }

}());
