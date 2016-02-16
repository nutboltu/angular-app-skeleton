(function(){
    app.service('userService', function($http, $q, $state, $window, API, RESPONSE_CODE,
                                        messageService, userModel){

        var self = this;

        function loginHandler(data){

            userModel.setLoggedInToken(data.token);
            userModel.setUserInfo(data.userInfo);
        }

        self.findById = function(id){
            var defer = $q.defer();
            var data = {
                userId: id
            };
            $http.post(API.user.findById, data)
                .success(function(results){
                    if(results.response_code === RESPONSE_CODE.success){

                        defer.resolve(results.data);
                    }
                    else if(results.response_code === RESPONSE_CODE.error){
                        defer.resolve(null);
                    }

                }).error(function(results){
                    defer.resolve(null);
                });
            return defer.promise;
        };

        self.login = function(data){

            var defer = $q.defer();

            $http.post(API.USER.LOGIN, data)
                .success(function(results){
                    console.log(results);
                    if(results.response_code === RESPONSE_CODE.success){
                        loginHandler(results.data);
                        $state.go('home');
                    }
                    else if(results.response_code === RESPONSE_CODE.error){
                        defer.resolve(messageService.ERROR_MESSAGES[results.errors.value]);
                    }


                }).error(function(results){
                    defer.resolve({
                        status: false,
                        title:'Connection Error',
                        msg: 'No internet connection'
                    });

                });
            return defer.promise;
        };

        self.logout = function(){
            userModel.clearSession();
            $state.go('login');

        };

        self.register = function(data){
            var defer = $q.defer();
            $http.post(API.USER.REGISTER, data)
                .success(function(results){
                    if(results.response_code === RESPONSE_CODE.success){

                        defer.resolve(messageService.SUCCESS_MESSAGES.REGISTER_CONFIRMATION);
                    }
                    else if(results.response_code === RESPONSE_CODE.error){
                        defer.resolve(messageService.ERROR_MESSAGES[results.errors.value]);
                    }

                }).error(function(results){
                    defer.resolve();
                });
            return defer.promise;
        };

    });


}).call(this);