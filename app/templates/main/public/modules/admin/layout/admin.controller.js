(function() {
    'use strict';

    angular
		.module('admin')
		.controller('AdminController', AdminController );

    AdminController.$inject = ['gaAuthentication', 'gaToast', 'gaBrowserHistory'];

	function AdminController(gaAuthentication, gaToast, gaBrowserHistory) {
        if (!gaAuthentication.isAdmin()) {
            gaToast.show('Sorry, you don\'t have permissions to access those pages');
            gaBrowserHistory.back();
        }
    }

}());
