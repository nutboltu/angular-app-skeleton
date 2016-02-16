(function () {
    'use strict';
    app.controller('headerController', function($rootScope, $scope, $state) {

        $scope.logout = function(){

        };

        $scope.start = function(){
            $scope.headline = $state.current.title;

        };

        $scope.start();
    });
}(this));