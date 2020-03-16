angular.module('primeiraApp').controller('EmpresaCtrl', [
    '$scope',
    '$http',
    '$location',
    'msgs',
    'tabs',
    'consts',
    EmpresaController
  ])

  function EventoController($scope, $http, $location, msgs, tabs, consts) {
    console.log('EmpresaController');
  }