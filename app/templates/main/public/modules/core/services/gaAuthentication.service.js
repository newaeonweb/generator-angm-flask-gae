(function() {
    'use strict';

	angular
		.module('core')
		.factory('gaAuthentication', gaAuthentication );

    /**
     * @name gaAuthentication
     * @memberOf angularModule.core
     * @description
     * This service holds user object, so it can be used in any controller
     */

	gaAuthentication.$inject = ['gaAuthenticatedUser', 'Restangular'];

    function gaAuthentication(gaAuthenticatedUser, Restangular) {
        var me = {
            user     : gaAuthenticatedUser,
            isLogged : function() {
                return !!me.user;
            },
            isAdmin  : function() {
                return me.isLogged() && me.user.admin;
            },
            setUser  : function(user) {
                me.user = Restangular.restangularizeElement(null, user, 'users');
            }
        };

        return me;
    }

}());
