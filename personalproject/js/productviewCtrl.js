angular.module('myapp').controller('productviewCtrl', function($scope, mainService, $stateParams) {

  $scope.test = "Akshar is the best!";
  $scope.getAllImages = function() {
    mainService.getImages().then(function(response) {
      var arrayOfObjects = response.data.map(function(element) {
        return {id:element};
      })

      for(var i = 0; i < arrayOfObjects; i++) {
        if($stateParams.id == arrayOfObjects[i].id) {
          $scope.oneimage = arrayOfObjects[i].id;
      
        }
      }
    })
  }
  $scope.getAllImages();

  //
  // for(var i = 0; i < $scope.images.length; i++) {
  //   if($stateParams.id == $scope.images[i].id) {
  //     $scope.oneimage = $scope.images[i].id;
  //
  //   }
  // }

  });
