'use strict';
(function () {

    function headerController($scope, $state) {

        $scope.logout = function(){
            //Call the logout method here
        };

        $scope.start = function(){

            $scope.headline = $state.current.title;

            //Write code here

        };

        $scope.start();
    }
    app.controller('headerController', ['$scope', '$state', headerController]);

})();