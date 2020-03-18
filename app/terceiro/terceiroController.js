angular.module('primeiraApp')
.controller('TerceiroCtrl', [
  '$scope',
  '$http',
  '$location',
  'msgs',
  'tabs',
  'consts',
  TerceiroController
])

function TerceiroController($scope, $http, $location, msgs, tabs, consts) {

  $scope.grandesEventosTerceiros = [{id:0, 'name':'Não'}, {id: 1, name: 'Sim'}]
  $scope.statusTerceiros = [{id:0, 'name':'Inativo'}, {id: 1, name: 'Ativo'}]
  $scope.ocupacoesTerceiros = [{id:0, name:'Vigilante'}, 
                                {id: 1, name: 'Cozinheiro'},
                                {id: 2, name: 'Recepcionista'},
                                {id: 3, name: 'Bilhetagem'}]

  $scope.getTerceiros = function() {
    const page = parseInt($location.search().page) || 1
    const url = `${consts.apiUrl}/terceiro`
    $http.get(url).then(function(resp) {
      $scope.terceiros = resp.data
      $scope.terceiro = {}

      $scope.pages = 1
      tabs.show($scope, {tabList: true, tabCreate: true})
    })
  }

  $scope.createTerceiro = function() {
    //TODO - Verificar a inserção
    const url = `${consts.apiUrl}/terceiro`;
    $http.post(url, $scope.terceiro)
    .then(function(response) {
      $scope.getTerceiros()
      msgs.addSuccess('Operação realizada com sucesso!!')
    }).catch(function(resp) {
      msgs.addError(resp.data.errors)
    })
  }

  $scope.showTabUpdate = function(terceiro) {
    $scope.terceiro = terceiro
    tabs.show($scope, {tabUpdate: true})
  }

  $scope.updateTerceiro = function() {
    //TODO - Verificar a alteração do terceiro
    const url = `${consts.apiUrl}/terceiro`
    $http.put(url, $scope.terceiro)
    .then(function(response) {
      $scope.terceiro = {}
      $scope.getTerceiros()
      tabs.show($scope, {tabList: true, tabCreate: true})
      msgs.addSuccess('Operação realizada com sucesso!')
    }).catch(function(resp) {
      msgs.addError(resp.data.errors)
    })
  }

  $scope.showTabDelete = function(terceiro) {
    $scope.terceiro = terceiro
    tabs.show($scope, {tabDelete: true})
  }

  $scope.deleteTerceiro = function() {
    //Verificar a exclusão
    const url = `${consts.apiUrl}/billingCycles/${$scope.billingCycle._id}`
    $http.put(url, $scope.billingCycle).then(function(response) {
       $scope.billingCycle = {}
       initCreditsAndDebts()
       $scope.getBillingCycles()
       tabs.show($scope, {tabList: true, tabCreate: true})
       msgs.addSuccess('Operação realizada com sucesso!')
    }).catch(function(resp) {
       msgs.addError(resp.data)
    })
  }

  $scope.cancel = function() {
    tabs.show($scope, {tabList: true, tabCreate: true})
    $scope.terceiro = {}
  }

  $scope.getTerceiros()
}
