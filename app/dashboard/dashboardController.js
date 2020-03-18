angular.module('primeiraApp')
.controller('DashboardCtrl', [
  '$http',
  'consts',
  DashboardController
])

function DashboardController($http, consts) {
  const vm = this
  
  vm.getSummary = function() {
	
	vm.faturamento = 40000
	vm.gastos = 25000

    const url = `${consts.apiUrl}/dashboard`;
    $http.get(url).then(function(response) {
		  console.log(response.data);
    })
  }

  vm.getSummary()
}
