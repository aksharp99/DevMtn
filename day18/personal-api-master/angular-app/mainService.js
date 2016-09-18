angular.module('aksharApp').service('mainService', function($http) {

  this.getName = function() {
    return $http({
      mehthod:'GET',
      url: 'http://localhost:8989/name'
    });
  };

  this.getLocation = function() {
    return $http({
      method: 'GET',
      url: 'http://localhost:8989/location'
    });
  };

  this.getOccupations = function() {
    return $http({
      method:'GET',
      url: 'http://localhost:8989/occupations'
    });
  };

  this.getHobbies = function() {
    return $http({
      method: 'GET',
      url: 'http://localhost:8989/hobbies'
    });
  };

  this.getSkills = function() {
    return $http({
      method:'GET',
      url: 'http://localhost:8989/skills'
    });
  };
});
