(function () {
    'use strict';
    app.controller('loginController', function($scope, userService) {

        $scope.submit = function(form){
            if(form.$valid){
                userService.login($scope.credentials).then(function(results){

                });
            }
        };

        $scope.start = function(){
            $scope.credentials = {};
        };

        $scope.start();
    });
}(this));
