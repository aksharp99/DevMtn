angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $stateParams, mainSrv) {
$scope.test = "Hey booked";

for(var i = 0; i < mainSrv.travelInfo.length; i++) {

if ($stateParams.id == mainSrv.travelInfo[i].id) {
  $scope.productData = mainSrv.travelInfo[i].city;
  $scope.image = {
    backgroundImage: 'url(' + mainSrv.travelInfo[i].image + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
}

}


});
