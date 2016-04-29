var appModules = [
            'ui.bootstrap',
            'ui.router'];

var app = angular.module('myApp', appModules);

app.run(function ($rootScope, $state, userModel) {
    $rootScope.$on("$stateChangeStart", function (event, toState, toParams) {  

        $rootScope.loggedIn = userModel.isAuthenticated(); 

        var loginRequired = toState.loginRequired;  

        //check if user is logged in 
        if (userModel.isAuthenticated() && loginRequired == false) { 
            event.preventDefault(); 
            $state.go('home');
              
        } 
        else if(!userModel.isAuthenticated() && loginRequired == true) {  
            event.preventDefault(); 
            $state.go('login'); 
        }
          });
  });   