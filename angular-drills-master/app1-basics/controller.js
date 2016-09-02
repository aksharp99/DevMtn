angular.module('myApp').controller('controller', function($scope, service) {

$scope.test = service.getUser();

$scope.typeytyperson="";


})
