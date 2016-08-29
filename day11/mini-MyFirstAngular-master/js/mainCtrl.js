angular.module('friendsList').controller('mainCtrl',function($scope){

 $scope.name = "Akshar";

 $scope.friends = ["Nick","Minh","Alex","Rahul","Brad","Tunde","Ken"];
 $scope.addFriend = function(addName) {
  $scope.friends.push(addName);

 }
});
