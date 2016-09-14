'use strict';

angular.module('Signup')

.controller('SignupController',
    ['$scope', '$rootScope', '$location',
    function ($scope, $rootScope, $location) {
        // reset login status
        //AuthenticationService.ClearCredentials();

        $scope.register = function () {
            $scope.dataLoading = true;
            AuthenticationService.register($scope.username, $scope.password, function(response) {
                if(response.success) {
                    //AuthenticationService.SetCredentials($scope.username, $scope.password);
                    $location.path('/');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };
    }]);
