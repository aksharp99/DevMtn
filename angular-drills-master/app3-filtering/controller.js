angular.module('app3').controller('mainCtrl', function($scope,svc){
  $scope.test = "Hello Angular";

  $scope.people = svc.data;

})
