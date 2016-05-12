var appModules = [
            'ngAnimate',
            'ui.bootstrap',
            'ui.router'];

var app = angular.module('myApp', appModules);

app.run(function ($rootScope, $state, userService) {
    $rootScope.$on("$stateChangeStart", function (event, toState, toParams) {  

        $rootScope.loggedIn = userService.isAuthenticated(); 

        var loginRequired = toState.loginRequired;  

        //check if user is logged in 
        if (userService.isAuthenticated() && loginRequired == false) { 
            event.preventDefault(); 
            $state.go('home');
              
        } 
        else if(!userService.isAuthenticated() && loginRequired == true) {  
            event.preventDefault(); 
            $state.go('login'); 
        }
          });
  });   