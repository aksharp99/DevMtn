angular.module('routingApp').controller('homeController', function($scope, starWarsService) {
  $scope.routeName = 'Home!';

starWarsService.getPeople()
.then(function(data) {
  $scope.people = data.results;
})


})
