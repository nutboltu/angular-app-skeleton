'use strict';

(function(){
    function apiService(APP_ENV){

        var self = this;

        self.USER = {
            LOGIN: APP_ENV.api +'/user/login',
            REGISTER: APP_ENV.api + '/user/register'
        };

    }
    app.service('apiService', ['APP_ENV', apiService]);

})();