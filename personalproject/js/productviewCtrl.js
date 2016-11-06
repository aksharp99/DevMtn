angular.module('myapp').controller('productviewCtrl', function($scope, mainService, $stateParams) {
  $scope.test = "Akshar is the best!";
  $scope.getAllImages = function() {
    mainService.getImages().then(function(response) {
      $scope.images = response.data;
    })
  }
  $scope.getAllImages();
  $scope.individualProduct = function() {
    for(var i = 0; i < $scope.images.length; i++) {
      if($stateParams.i === response.data[i]) {
        $scope.image = response.data[i];
        console.log('this is response', response);
        console.log('this is response data: ',response.data);
      }
    }
  }
  $scope.individualProduct();

  });
