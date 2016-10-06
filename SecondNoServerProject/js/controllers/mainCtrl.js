angular.module('journal').controller('mainCtrl', function($scope) {
  $scope.getApi = function() {
    mainService.getApi().then(function(response) {
      $scope.api = response.data;
      console.log($scope.api)
      console.log(response.data);
    })
    $scope.getApi();
  }
})
