'use strict';

(function(){

    function authInterceptor($window){

        this.request = function(config){

            var token = $window.localStorage.getItem('token');
            if (token){

                config.headers = config.headers || {};
                //In request header pass token in x-access-token field
                config.headers['x-access-token'] = token;
            }
            return config;
        }
    }

    app.service('authInterceptor', ['$window', authInterceptor]);

})();
