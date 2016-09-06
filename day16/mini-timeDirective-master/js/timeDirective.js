angular.module('timeApp').directive('showTime', function() {
  return {
    restrict: 'E',
    template: '<div> The {{name}} current time is {{time}} </div>',
    link: function(scope, element, attrs) {
      var currentTime = new Date();
        scope.time = currentTime.toString();
    },
    controller: function($scope) {
      $scope.name = "YOGABBGAGABBA";
    }

  }

})
