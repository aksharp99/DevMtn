angular.module('myapp').service('mainService', function($http) {

  this.getImages = function() {
    return $http({
      method:'GET',
      url:'/photos'
    }).then(function(response) {
      return response;
      console.log('this is the response: ',response);
      console.log('this is the response data: ',response.data);
    })
  }
})
