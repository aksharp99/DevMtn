angular.module('journal').controller('mainCtrl', function($scope) {
  $scope.getApi = function() {
    mainService.getApi().then(function(response) {
      $scope.api = response.data;
    })
    $scope.getApi();
  }
})
