angular.module('myapp').controller('mainCtrl', function($scope, mainService) {
  $scope.test = "Akshar is the best!";

  $scope.getAllImages = function() {
    mainService.getImages().then(function(response) {
      $scope.images = response.data;
      console.log('this is response data: ',response.data);
    })
  }

  $scope.getAllImages();
  });
