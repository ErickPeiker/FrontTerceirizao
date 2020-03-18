angular.module('primeiraApp')
.controller('EmpresaCtrl', [
    '$scope',
    '$http',
    '$location',
    'msgs',
    'tabs',
    'consts',
    EmpresaController
  ])

  function EmpresaController($scope, $http, $location, msgs, tabs, consts) {
    $scope.empresa = {}
    $scope.empresas = []
    tabs.show($scope, {tabList: true, tabCreate: true})
    
    $scope.getEmpresas = function() {
      const page = parseInt($location.search().page) || 1
      const url = `${consts.apiUrl}/empresa`
      $http.get(url).then(function(resp) {
        $scope.empresas = resp.data
      });
    }


  $scope.createEmpresa = function() {
    const url = `${consts.apiUrl}/empresa`;
    console.log($scope.empresa)
    $http.post(url, $scope.empresa)
    .then(function(response) {
      $scope.getEmpresas()
      msgs.addSuccess('Operação realizada com sucesso!!')
    }).catch(function(resp) {
      console.log(resp.data.errors)
      msgs.addError(resp.data.errors)
    })
  }

  $scope.showTabUpdate = function(empresa) {
    $scope.empresa = empresa
    tabs.show($scope, {tabUpdate: true})
  }

  $scope.updateEmpresa = function() {
    const url = `${consts.apiUrl}/empresa`
    $http.put(url, $scope.empresa)
    .then(function(response) {
      $scope.empresa = {}
      $scope.getEmpresas()
      tabs.show($scope, {tabList: true, tabCreate: true})
      msgs.addSuccess('Operação realizada com sucesso!')
    }).catch(function(resp) {
      msgs.addError(resp.data.errors)
    })
  }

  $scope.showTabDelete = function(empresa) {
    $scope.empresa = empresa
    tabs.show($scope, {tabDelete: true})
  }

  $scope.deleteEmpresa = function() {
    const url = `${consts.apiUrl}/empresa/`
    $http.put(url, $scope.empresa)
    .then(function(response) {
      $scope.empresa = {}
      $scope.getEmpresas()
      tabs.show($scope, {tabList: true, tabCreate: true})
      msgs.addSuccess('Operação realizada com sucesso!')
    }).catch(function(resp) {
      msgs.addError(resp.data)
    })
  }

  $scope.cancel = function() {
    tabs.show($scope, {tabList: true, tabCreate: true})
    $scope.empresa = {}
  }

  $scope.getEmpresas()
}