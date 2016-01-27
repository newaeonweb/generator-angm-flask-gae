(function() {
    'use strict';

	angular
		.module('users')
		.directive('gaEmail', gaEmail);

    /**
     * @name gaEmail
     * @memberOf angularModule.users
     * @description
     * Inserts email input into page. This directive is mainly to prevent code repetition
     * throughout the app
     */

    function gaEmail() {
        /*jslint unparam:true*/
        var prelink = function(scope, el, attrs, form) {
            scope.name = scope.name || 'email';
            scope.label = scope.label || 'Email';
            scope.form = form;
            scope.required = attrs.required !== undefined && attrs.required !== 'false';
        };

        return {
            link        : {
                pre : prelink
            },
            restrict    : 'EA',
            replace     : true,
            require     : '^form',
            scope       : {
                inputTabindex : '@',
                name          : '@',
                label         : '@',
                ngModel       : '='
            },
            templateUrl : '/p/modules/users/directives/gaEmail.html'
        };
    }

}());
