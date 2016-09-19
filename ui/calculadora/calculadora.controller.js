'use strict';

angular.module('Calculadora')

.controller('CalculadoraController',
    ['$scope', '$rootScope', '$location',
    function ($scope, $rootScope, $location) {
     $scope.priceSlider = 100;
  }]);
