angular.module('myapp').service('productService', function($http) {

  this.getImages = function() {
    return $http({
      method:'GET',
      url:'/api/products'
    }).then(function(response) {
      return response;
      console.log('this is the service response: ',response);
      console.log('this is the service response data: ',response.data);
    })
  }

  this.getProductById = function(id){
    return $http({
      method:'GET',
      url:'/api/products/' + id
    }).then(function(response) {
      

      return response.data; // This is the single product for this page.
      console.log('this is the response from the service: ',response.data);
    })
  }

})
