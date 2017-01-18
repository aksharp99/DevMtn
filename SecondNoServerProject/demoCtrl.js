angular.module('journal').controller('demoCtrl', function($scope, mainService) {

  $scope.directionApi = function(frominput, toinput) {
    mainService.directionApi(frominput, toinput).then(function(response) {
      $scope.steps = response.data.routes[0].legs[0].steps;
      console.log('this is the scope.steps:',$scope.steps);

    })
  }

  $scope.directionReverseApi = function(toinput, frominput) {
    mainService.directionApi(toinput, frominput).then(function(response) {
      $scope.steps = response.data.routes[0].legs[0].steps;

    })
  }

})
