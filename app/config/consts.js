angular.module('primeiraApp').constant('consts', {
  appName: 'Vigifort',
  apiUrl: 'http://localhost:8080',
}).run(['$rootScope', 'consts', function($rootScope, consts) {
  $rootScope.consts = consts
}])
