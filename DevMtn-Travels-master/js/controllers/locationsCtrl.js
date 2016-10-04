angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainSrv) {
  $scope.test = "locations";
  $scope.locations = mainSrv.travelInfo;
})
