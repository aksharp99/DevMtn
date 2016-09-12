angular.module('marioApp').directive('dmHeader', function() {
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
      keepScore: '&'
    },

    link: function(scope, element, attributes) {

      element.on('click', function(event) {




        var newColor = getColor();



        element.css('background-color', newColor);
        scope.keepScore(newColor);
      })
    },

    controller: function($scope) {
      $scope.test = "CLICKED!";
      console.log($scope.title);

      $scope.keepScore = function(newColor) {
        // if(newColor === 'yellow'){
        if(newColor) {
          score += 10;
        } else {
          score -= 10;
        }
        console.log('Your score is now', score);
      }


    }

  }
})
