(function(){

    app.service('apiService', function(APP_ENV){

        var self = this;

        self.USER = {
            LOGIN: APP_ENV.api +'/user/login',
            REGISTER: APP_ENV.api + '/user/register'
        };

    })

}).call(this);