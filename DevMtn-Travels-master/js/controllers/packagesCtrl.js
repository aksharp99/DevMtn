angular.module('devmtnTravel').controller('packagesCtrl', function($scope, mainSrv) {
  $scope.test = "packages";
  $scope.packages = mainSrv.travelInfo;
})
