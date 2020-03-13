angular.module('primeiraApp').config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('dashboard', {
      url: "/dashboard",
      templateUrl: "dashboard/dashboard.html"
    }).state('terceiro', {
      url: "/terceiro?page",
      templateUrl: "terceiro/tabs.html"
    })

    $urlRouterProvider.otherwise('/dashboard')
}])
