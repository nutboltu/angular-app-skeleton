(function () {
    app.config(['$httpProvider',
        function ($httpProvider) {

            $httpProvider.interceptors.push('authInterceptor');
        }]);

}).call(this);