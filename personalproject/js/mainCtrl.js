angular.module('myapp').controller('mainCtrl', function($scope, mainService) {
  $scope.test = "Akshar is the best!";

  $scope.getAllImages = function() {
    mainService.getImages().then(function(response) {
      console.log('this is response: ',response);
      console.log('this is response data: ',response.data);
      var arrayOfObjects = response.data.map(function(element) {
        return {id:element};
      })

      $scope.images = arrayOfObjects;
      console.log('this is the arrayOfObjects: ',arrayOfObjects);

    })
  }

  $scope.getAllImages();
  });
