angular.module('journal').controller('mainCtrl', function($scope, mainService) {


  $scope.directionApi = function(frominput, toinput) {
    mainService.directionApi(frominput, toinput).then(function(response) {
      $scope.steps = response.data.routes[0].legs[0].steps;
      console.log($scope.steps);
      console.log('this is the response: ',response);
    })
  }

  $scope.directionReverseApi = function(toinput, frominput) {
    mainService.directionApi(toinput, frominput).then(function(response) {
      $scope.steps = response.data.routes[0].legs[0].steps;
    })
  }

})
