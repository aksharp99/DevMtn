angular.module('timeapp').directive('showTime', function($interval) {
  return {
    restrict: 'E',
    template: '<div> The current time is {{time}} </div>',
    scope: {
      runTime: '&'
    },

    link: function(scope, element, attribute) {

      $interval(function() {
          var currentTime = new Date();
      scope.time = currentTime.toString();
    }, 1000)


    }
  }
})
