angular.module('primeiraApp').config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('dashboard', {
      url: '/dashboard',
      templateUrl: 'dashboard/dashboard.html'
    }).state('terceiro', {
      url: '/terceiro?page',
      templateUrl: 'terceiro/tabs.html'
    }).state('empresa', {
      url: '/empresa?page',
      templateUrl: 'empresa/tabs.html'
    }).state('evento', {
      url: '/evento?page',
      templateUrl: 'evento/tabs.html'
    })

    $urlRouterProvider.otherwise('/dashboard')
}])
