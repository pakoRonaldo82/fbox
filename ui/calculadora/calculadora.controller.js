'use strict';

angular.module('Calculadora')

.controller('CalculadoraController',
    ['$scope', '$rootScope', '$location',
    function ($scope, $rootScope, $location) {
     $scope.costoLargo = 100;
     $scope.costoAlto = 100;
     $scope.costoAncho = 100;
  }]);
