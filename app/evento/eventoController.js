angular.module('primeiraApp').controller('EventoCtrl', [
    '$scope',
    '$http',
    '$location',
    'msgs',
    'tabs',
    'consts',
    EventoController
  ])

  function EventoController($scope, $http, $location, msgs, tabs, consts) {
    console.log('EventoController');
  }