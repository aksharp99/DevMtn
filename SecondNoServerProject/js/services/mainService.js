angular.module('journal').service('mainService', function($http) {
  this.getApi = function() {
    return $http({
      method: 'GET',
      url: freegeoip.net/json/
    })
  }
})
