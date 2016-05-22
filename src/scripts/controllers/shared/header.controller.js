(function () {
    'use strict';
    function headerController($scope, $state) {

        $scope.logout = function(){

        };

        $scope.start = function(){
            $scope.headline = $state.current.title;

        };

        $scope.start();
    }
    app.controller('headerController', ['$scope', '$state', headerController]);
}(this));