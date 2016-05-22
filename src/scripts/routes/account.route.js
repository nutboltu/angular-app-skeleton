(function () {
    'use strict';
    function accountRouter($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/');

        $stateProvider
            .state('home',{
                url: '/',
                views: {
                    'header': {
                        templateUrl: 'views/shared/_header.html',
                        controller: 'headerController'
                    },
                    'main':{
                        controller: 'homeController',
                        templateUrl: 'views/account/home.html'
                    }
                },
                cache: false,
                title:'Home',
                loginRequired: true
            })
            .state("login", {
                url: "/login",
                views:{
                    'header': {
                        templateUrl: 'views/shared/_header.html',
                        controller: 'headerController'
                    },
                    'main':{
                        controller: 'loginController',
                        templateUrl: 'views/account/login.html'
                    }

                },
                cache: false,
                title:'Login',
                loginRequired: false
            })
            .state("register", {
                url: "/register",
                views:{
                    'header': {
                        templateUrl: 'views/shared/_header.html',
                        controller: 'headerController'
                    },
                    'main':{
                        controller: 'registerController',
                        templateUrl: 'views/account/register.html'
                    }

                },
                cache: false,
                title:'Create Account',
                loginRequired: false
            });
    }
    app.config(['$stateProvider', '$urlRouterProvider',accountRouter]);

}(this));