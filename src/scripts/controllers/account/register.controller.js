(function () {
    'use strict';
    function registerController($rootScope, $scope, userService) {

        $scope.submit = function(form){
            if(form.$valid){
                userService.register($scope.user).then(function(results){
                    if(results.success){
                        $scope.message = results;
                        $rootScope.$emit("header:title",results.title);

                    }
                });
            }
        };
        $scope.start = function(){
            $scope.user = {};
        };

        $scope.start();

    }
    app.controller('registerController', ['$rootScope', '$scope', 'userService', registerController]);
}(this));