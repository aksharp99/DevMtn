angular.module('journal').service('mainService',function($http) {

  this.directionApi = function(originname, destname) {

    var key = 'AIzaSyDIYdOLEBDJLUV6pd41h_PAdVhFoXZyyTo';
    for (var i = 0; i < destname.length; i++) {
      if(destname.slice(i, i+1) === " ") {
        destname = destname.slice(0,i) + "+" + destname.slice(i + 1);
      }
    }
    for(var i = 0; i < originname.length; i++) {
      if(originname.slice(i, i+1) === " ") {
        originname = originname.slice(0,i) + "+" + originname.slice(i + 1);
      }
    }

    return $http({
      method:'GET',
      url:'https://maps.googleapis.com/maps/api/directions/json?origin='+originname+'&destination='+destname+'&key='+key
    })
  }
})
