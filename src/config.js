'use strict';

(function () {

    function appConfig($httpProvider) {

        $httpProvider.interceptors.push('authInterceptor');
    }

    app.config(['$httpProvider', appConfig]);

})();