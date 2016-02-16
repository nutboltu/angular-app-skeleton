(function () {
    'use strict';
    app.controller('registerController', function($rootScope, $scope, $sce, userService) {

        $scope.submit = function(form){
            if(form.$valid){
                userService.register($scope.user).then(function(results){
                    console.log(results);
                    if(results.success){
                        $scope.message = results;
                        $rootScope.$emit("header:title",results.title);
                        $scope.message.description = $sce.trustAsHtml($scope.message.description);
                    }
                });
            }
        };
        $scope.start = function(){
            $scope.user = {};
        };

        $scope.start();

    });
}(this));