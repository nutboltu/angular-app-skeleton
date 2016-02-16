
app.service('authInterceptor', function($window){
    this.request = function(config){
        var token = $window.localStorage.getItem('token');
        if (token){
            config.headers = config.headers || {};
            config.headers['x-access-token'] = token;
        }
        return config;
    }
});