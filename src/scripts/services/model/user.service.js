(function(){
    function userService($http, $q, $state, $window, apiService){

        var self = this;

        function loginHandler(data){

            $window.localStorage.setItem('token', data.token);
            //$window.localStorage.setItem('userInfo', JSON.stringify(data.userInfo));
        }

        self.isAuthenticated = function(){
            return  !!$window.localStorage.getItem('token');
        };

        self.login = function(data){

            var defer = $q.defer();
            $http.post(apiService.USER.LOGIN, data)
                .success(function(results){
                    loginHandler(results.data);
                    $state.go('home');
                }).error(function(results){
                defer.resolve(results.message);

            });
            return defer.promise;
        };

        self.logout = function(){
            $window.localStorage.clear();
            $state.go('login');

        };

        self.register = function(data){
            var defer = $q.defer();
            $http.post(apiService.USER.REGISTER, data)
                .success(function(results){
                    defer.resolve(results);
                }).error(function(results){
                defer.resolve(results.message);
            });
            return defer.promise;
        };

    }
    app.service('userService', ['$http', '$q', '$state', '$window', 'apiService', userService]);


}).call(this);