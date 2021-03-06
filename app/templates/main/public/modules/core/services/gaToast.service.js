(function() {
    'use strict';


	angular
		.module('core')
		.factory('gaToast', gaToast);

    /**
     * @name gaToast
     * @memberOf angularModule.core
     * @description
     * Service responsible for showing, hiding, updating toast
     */

	gaToast.$inject = ['$mdToast', '_' ];

    function gaToast($mdToast, _) {
        return {
            show   : function(content, opts) {
                opts = opts || {};
                opts.delay = _.isNumber(opts.delay) ? opts.delay : 4000;
                var toast = $mdToast.simple()
                    .content(content)
                    .hideDelay(opts.delay);
                if (opts.action) {
                    toast.action(opts.action);
                    toast.highlightAction(true);
                }
                return $mdToast.show(toast);
            },
            update : function(content) {
                $mdToast.updateContent(content);
            },
            hide   : function() {
                $mdToast.hide();
            }
        };
    }

}());
