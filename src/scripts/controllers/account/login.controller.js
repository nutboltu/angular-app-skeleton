'use strict';

(function () {

    function loginController($scope, userService) {

        $scope.submit = function(form){

            if(form.$valid){
                userService.login($scope.credentials)
                    .then(function(results){
                           //Successfully logged in
                    });
            }
        };

        $scope.start = function(){

            $scope.credentials = {};
        };

        $scope.start();
    }

    app.controller('loginController', ['$scope', 'userService', loginController] );
    
})();
