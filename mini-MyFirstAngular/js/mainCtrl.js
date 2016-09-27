angular.module('friendsList').controller('mainCtrl', function($scope) {
  $scope.name = "Akshar";
  $scope.listOfFriends = ["Ken","Nick","Tunde","Rahul","Minh","Phu","Alex"];

  $scope.x = angular.element(document.querySelector('#special'));
  $scope.test = $scope.x;

  $scope.test.on('click', function() {

    var i = Math.floor(Math.random() * $scope.listOfFriends.length);

  $scope.alldesefriends = $scope.listOfFriends[i];

console.log($scope.alldesefriends);

})
  $scope.addFriend = function(anotherFriend) {
    console.log(anotherFriend);
    return $scope.listOfFriends.push(anotherFriend);

  }

$scope.salutation="Hello";
$scope.name = "World";


})
