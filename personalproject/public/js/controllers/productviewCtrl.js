angular.module('myapp').controller('productviewCtrl', function($scope, productService, $stateParams) {

console.log('this is $stateParams: ',$stateParams);
console.log('this is $stateParams.id: ',$stateParams.id);
  $scope.getOneImage = function() {
    productService.getProductById($stateParams.id).then(function(response) {
      $scope.product = response[0];
      $scope.price = $scope.product.price;
      console.log('this is the productViewCtrl response: ',response);
    })
  }
    $scope.getOneImage();





  });
