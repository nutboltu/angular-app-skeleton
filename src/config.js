(function () {
    app.config(['$httpProvider', 'ipnConfig',
        function ($httpProvider, ipnConfig) {

            $httpProvider.interceptors.push('authInterceptor');

            ipnConfig.defaultCountry = 'au';
            ipnConfig.autoHideDialCode = false;
        }]);

}).call(this);