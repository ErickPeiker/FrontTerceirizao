angular.module('primeiraApp').controller('TerceiroCtrl', [
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
    $http.post(url, $scope.terceiro).then(function(response) {
      $scope.terceiro = {}
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
    const url = `${consts.apiUrl}/billingCycles/${$scope.billingCycle._id}`
    $http.put(url, $scope.billingCycle).then(function(response) {
      $scope.billingCycle = {}
      initCreditsAndDebts()
      $scope.getBillingCycles()
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

  /*$scope.addDebt = function(index) {
    $scope.billingCycle.debts.splice(index + 1, 0, {})
  }

  $scope.cloneDebt = function(index, {name, value, status}) {
    $scope.billingCycle.debts.splice(index + 1, 0, {name, value, status})
    initCreditsAndDebts()
  }

  $scope.deleteDebt = function(index) {
    $scope.billingCycle.debts.splice(index, 1)
    initCreditsAndDebts()
  }

  $scope.addCredit = function(index) {
    $scope.billingCycle.credits.splice(index + 1, 0, {name: null, value: null})
  }

  $scope.cloneCredit = function(index, {name, value}) {
    $scope.billingCycle.credits.splice(index + 1, 0, {name, value})
    initCreditsAndDebts()
  }

  $scope.deleteCredit = function(index) {
    $scope.billingCycle.credits.splice(index, 1)
    initCreditsAndDebts()
  }*/

  $scope.cancel = function() {
    tabs.show($scope, {tabList: true, tabCreate: true})
    $scope.terceiro = {}
  }

  /*$scope.calculateValues = function() {
    $scope.credit = 0
    $scope.debt = 0

    if($scope.billingCycle) {
      $scope.billingCycle.credits.forEach(function({value}) {
        $scope.credit += !value || isNaN(value) ? 0 : parseFloat(value)
      })

      $scope.billingCycle.debts.forEach(function({value}) {
        $scope.debt += !value || isNaN(value) ? 0 : parseFloat(value)
      })
    }

    $scope.total = $scope.credit - $scope.debt
  }

  var initCreditsAndDebts = function() {
    if(!$scope.billingCycle.debts || !$scope.billingCycle.debts.length) {
      $scope.billingCycle.debts = []
      $scope.billingCycle.debts.push({})
    }

    if(!$scope.billingCycle.credits || !$scope.billingCycle.credits.length) {
      $scope.billingCycle.credits = []
      $scope.billingCycle.credits.push({})
    }

    $scope.calculateValues()
  } */

  $scope.getTerceiros()
}
