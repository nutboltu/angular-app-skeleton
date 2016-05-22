(function () {
    'use strict';
    function loginController($scope, userService) {

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
    }
    app.controller('loginController', ['$scope', 'userService', loginController] );
    
}(this));
