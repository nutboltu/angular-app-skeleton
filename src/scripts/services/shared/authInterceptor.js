(function(){
    'use strict';
    function authInterceptor($window){
        this.request = function(config){
            var token = $window.localStorage.getItem('token');
            if (token){
                config.headers = config.headers || {};
                config.headers['x-access-token'] = token;
            }
            return config;
        }
    }
    app.service('authInterceptor', ['$window', authInterceptor]);
}).call(this);
