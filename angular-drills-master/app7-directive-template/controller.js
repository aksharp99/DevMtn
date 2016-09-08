angular.module('directiveApp').controller('mainController', function($scope) {
  $scope.pageTitle = "Akshar's cool web page";

  $scope.myFunc = function() {
    alert('Hello There!');
  }
})
