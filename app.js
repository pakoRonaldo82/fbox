'use strict';

// declare modules
angular.module('Authentication', []);
angular.module('Main', []);
angular.module('Home', []);
angular.module('Signup', []);
angular.module('Calculadora', []);

angular.module('app', [
    'Authentication',
    'Home',
    'Main',
    'Signup',
    'Calculadora',
    'ngRoute',
    'ngCookies',
    'rzModule'
])

.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/login', {
            controller: 'LoginController',
            templateUrl: 'ui/authentication/views/login.html'
        })
       .when('/main', {
            controller: 'MainController',
            templateUrl: 'ui/main/views/main.html'
        })
        .when('/signup', {
            controller: 'SignupController',
            templateUrl: 'ui/signup/views/signup.html',
            hideMenus: true
        }).when('/calculadora', {
            controller: 'CalculadoraController',
            templateUrl: 'ui/calculadora/views/calculadora.html',
            hideMenus: true
        })

        .when('/', {
            controller: 'HomeController',
            templateUrl: 'modules/home/views/home.html'
        })

        .otherwise({ redirectTo: '/login' });
}])

.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if($location.path() === '/signup') {

            } else if($location.path() === '/login') {

            } else if($location.path() === '/calculadora') {

            } else if ($location.path() !== '/main' && !$rootScope.globals.currentUser) {
                $location.path('/login');
            }
        });
    }]);
