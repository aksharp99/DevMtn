angular.module('aksharApp').controller('ctrl', function(mainService, $scope) {

  $scope.getName = mainService.getName().then(function(response) {
    $scope.name = response.data;
  });

  $scope.getLocation = mainService.getLocation().then(function(response) {
    $scope.location = response.data;
  });

  $scope.getOccupations = mainService.getOccupations().then(function(response) {
    $scope.occupations = response.data;
  });

  $scope.getHobbies = mainService.getHobbies().then(function(response) {
    $scope.hobbies = response.data;
  });

  $scope.getSkills = mainService.getSkills().then(function(response) {
    $scope.skills = response.data;
  });
});
