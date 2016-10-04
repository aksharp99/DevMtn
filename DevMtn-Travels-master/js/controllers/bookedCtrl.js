angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv, $stateParams) {
  console.log($stateParams);


    for(var i = 0; i <mainSrv.travelInfo.length; i++) {
      if($stateParams.id == mainSrv.travelInfo[i].id) {
          // $scope.books = mainSrv.travelInfo[i];
          $scope.image = mainSrv.travelInfo[i].image;
          $scope.city = mainSrv.travelInfo[i].city;
    }
  }



})
