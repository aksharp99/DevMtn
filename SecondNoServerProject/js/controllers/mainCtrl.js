angular.module('journal').controller('mainCtrl', function($scope, mainService) {
  $scope.getApi = function() {
    mainService.getApi('www.microsoft.com').then(function(response) {

      $scope.fromlat = response.data.routes[0].bounds.northeast.lat;

      $scope.fromlng = response.data.routes[0].bounds.northeast.lng;

      $scope.tolat = response.data.routes[0].bounds.southwest.lat;

      $scope.tolng = response.data.routes[0].bounds.southwest.lng;


    $scope.getSteps = function() {
      $scope.steps = response.data.routes[0].legs[0].steps;
        console.log(response.data.routes[0].legs[0].steps);
    }


    })

  }

  $scope.getAnotherApi = function(frominput, toinput) {
    mainService.getAnotherApi(frominput, toinput).then(function(response) {
      $scope.steps = response.data.routes[0].legs[0].steps;

    })
  }
      $scope.getApi();
      // $scope.getAnotherApi();
})
