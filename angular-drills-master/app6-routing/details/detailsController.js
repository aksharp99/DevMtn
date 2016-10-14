angular.module('routingApp').controller('detailsController', function($scope, starWarsService, $stateParams) {
  starWarsService.getPerson($stateParams.url).then(function(person) {
    $scope.person = person;
    console.log('the person is: ',person);
  })
})
