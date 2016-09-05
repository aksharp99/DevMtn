angular.module('devmtnTravel').controller('packageCtrl', function($scope, mainSrv) {
$scope.getPackage = mainSrv.travelInfo;
})
