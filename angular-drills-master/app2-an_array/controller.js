angular.module('arrayApp').controller('arrayController', function($scope, svc){

$scope.test = "working";

$scope.people = svc.data;

})
