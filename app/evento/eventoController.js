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
  tabs.show($scope, {tabList: true, tabCreate: true})

  $scope.getEventos = function() {
    const page = parseInt($location.search().page) || 1
    const url = `${consts.apiUrl}/evento`
    $http.get(url).then(function(resp) {
      $scope.eventos = resp.data
      $scope.evento = {}
      $scope.pages = 1
      tabs.show($scope, {tabList: true, tabCreate: true})
    })
  }

  $scope.createEvento = function() {
    //TODO - Verificar a inserção
    const url = `${consts.apiUrl}/evento`;
    $http.post(url, $scope.evento)
    .then(function(response) {
      $scope.getEventos()
      msgs.addSuccess('Operação realizada com sucesso!!')
    }).catch(function(resp) {
      msgs.addError(resp.data.errors)
    })
  }

  $scope.showTabUpdate = function(evento) {
    $scope.evento = evento
    tabs.show($scope, {tabUpdate: true})
  }

  $scope.updateEvento = function() {
    const url = `${consts.apiUrl}/evento`
    $http.put(url, $scope.evento)
    .then(function(response) {
      $scope.evento = {}
      $scope.getEventos()
      tabs.show($scope, {tabList: true, tabCreate: true})
      msgs.addSuccess('Operação realizada com sucesso!')
    }).catch(function(resp) {
      msgs.addError(resp.data.errors)
    })
  }

  $scope.showTabDelete = function(evento) {
    $scope.evento = evento
    tabs.show($scope, {tabDelete: true})
  }

  $scope.deleteEvento = function() {
    const url = `${consts.apiUrl}/evento/${$scope.evento.id}`
    $http.put(url, $scope.evento)
    .then(function(response) {
       $scope.evento = {}
       tabs.show($scope, {tabList: true, tabCreate: true})
       msgs.addSuccess('Operação realizada com sucesso!')
    }).catch(function(resp) {
       msgs.addError(resp.data)
    })
  }

  $scope.cancel = function() {
    tabs.show($scope, {tabList: true, tabCreate: true})
    $scope.evento = {}
  }

  $scope.getEventos()

}