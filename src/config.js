(function () {
    'use strict';
    function appConfig($httpProvider) {

        $httpProvider.interceptors.push('authInterceptor');
    }
    app.config(['$httpProvider', appConfig]);
}).call(this);