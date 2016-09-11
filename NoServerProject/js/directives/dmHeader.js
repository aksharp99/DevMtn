angular.module('directiveApp').directive('dmHeader', function() {
  var score = 0;
  function getColor() {
    var colors = ['green', 'yellow', 'red', 'blue'];
    var index = Math.floor(Math.random() * colors.length);

    return colors[index];
  }

  return {
    restrict: 'AE',
    scope: {
      title: '@',
      callback: '&'
    },
    link: function(scope, element, attributes) {
      element.on('click', function(event) {

        scope.callback();
        var newColor = getColor();

        var targetElement = element.find('div');
        targetElement.css('background-color', newColor);
        scope.keepScore(newColor);
      })
    },
    templateUrl: 'dmHeader.html',
    controller: function($scope) {
      $scope.test = "CLICKED!";
      console.log($scope.title);

      $scope.keepScore = function(newColor) {
        if(newColor === 'yellow') {
          score += 10;
        } else {
          score -= 10;
        }
        console.log('Your score is now', score);
      }


    }

  }
})
