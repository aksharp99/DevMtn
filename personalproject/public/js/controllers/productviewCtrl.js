angular.module('myapp').controller('productviewCtrl', function($scope, productService, $stateParams) {

  $scope.getOneImage = function() {
    productService.getProductById($stateParams.id).then(function(response) {
      $scope.product = response[0];
      $scope.price = $scope.product.price;
      console.log('this is the response in mainCtrl: ',response);
    })
  }
    $scope.getOneImage();





  });
