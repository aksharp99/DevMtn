angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainSrv) {
$scope.getPackage = mainSrv.travelInfo;
})
