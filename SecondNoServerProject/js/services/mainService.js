angular.module('journal').service('mainService', function($http) {
  this.getApi = function(site) {
    return $http({
      method: 'GET',
      url: 'https://maps.googleapis.com/maps/api/directions/json?origin=75+9th+Ave+New+York,+NY&destination=MetLife+Stadium+1+MetLife+Stadium+Dr+East+Rutherford,+NJ+07073&key=AIzaSyDIYdOLEBDJLUV6pd41h_PAdVhFoXZyyTo'

    })
  }

this.getAnotherApi = function(originname, destname) {

  var key = 'AIzaSyDIYdOLEBDJLUV6pd41h_PAdVhFoXZyyTo';
  for (var i = 0; i < destname.length; i++) {
    if(destname.slice(i, i+1) === " ") {
      destname = destname.slice(0,i) + "&" + destname.slice(i + 1);
    }
  }
  return $http({
    method: 'GET',
    url:'https://maps.googleapis.com/maps/api/directions/json?origin='+originname+'&destination='+destname+'&key='+key
  })
}
})
