angular.module('userProfiles').controller('MainController', function($scope, mainService) {

  // $scope.getUsers = function() {
  // 	mainService.getUsers().then(function(response) {
  //     $scope.users = response.data.data;
  //   });
  // }
  $scope.pageNum = 1;

  $scope.getUsers = function() {
    var promise = mainService.getUsers($scope.pageNum);

    promise.then(function(response){
      $scope.users = response.data.data;
      $scope.totalPages = response.data.total_pages;
    })
  }

$scope.getUsers();

  $scope.prev = function() {
    if($scope.pageNum > 1) {
    $scope.pageNum--;
    $scope.getUsers();
  }
  }

  $scope.next = function() {
    if($scope.totalPages > $scope.pageNum){
    $scope.pageNum++;
    $scope.getUsers();
  }
  }

});
