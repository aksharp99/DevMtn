angular.module('marioApp').directive('dmHeader', function($state) {
  var newColor = getColor();
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
        scope.getScore();
      })
    },

    controller: function($scope) {

      $scope.test = "CLICKED!";
      console.log($scope.title);

      $scope.keepScore = function(newColor) {


        if(newColor) {
          score += 10;
        } else {
          score -= 10;
        }
        console.log('Your score is now', score);
        return score;
  }

  $scope.getScore = function() {
    console.log("In get score");
    console.log(score);
    if (score === 270) {
      alert('YOU WIN!! HIGHSCORE IS: ' +score);
      $state.go("teleport");
      
    }
  }

}


}
});
