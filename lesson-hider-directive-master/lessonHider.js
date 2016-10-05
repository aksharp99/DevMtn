angular.module('directivePractice').directive('lessonHider', function() {
  return {
    restrict: 'E',
    templateUrl: './lessonHider.html',
    scope: {
      lesson: '=',
      dayAlert: '&'
    },
    controller: function($scope, lessonService) {
      $scope.getSchedule = lessonService.getSchedule()
    },
    link: function(scope, element, attributes) {
      scope.getSchedule.then(function(response) {
        scope.schedule = response.data;

        scope.schedule.forEach(function(el,index) {
          console.log(scope.lesson);
          if(el.lesson === scope.lesson) {

            element.css('text-decoration','line-through');
            scope.lessonDay = el.weekday;
            // console.log(scope.schedule[index].weekday);
            return;

          }

        })
      });

    }
  }
});
