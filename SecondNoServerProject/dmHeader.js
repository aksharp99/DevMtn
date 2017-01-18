angular.module('journal').directive('dmHeader',function() {
  var newColor = getColor();
  function getColor() {
    var colors = ['crimson','cyan','darkviolet','rosybrown','chartreuse','bisque','lightsteel','blue','black','lightsalmon','darkmagenta','olive','red','tomato','slategray','royalblue','chocolate','darkkhaki','darkseagreen','khaki','firebrick','teal','thistle','green','coral','sienna','palevioletred','seagreen','darkorange','blue','yellow','orangered','purple','indianred','gold','aquamarine'];

    var index = Math.floor(Math.random() * colors.length);

    return colors[index];
  }

  return {
    restrict: 'E',

    scope: {
      keepScore: '&'
    },

    link: function(scope, element, attributes) {
      element.on('mouseenter', function(event) {
        var newColor = getColor();
        var targetElement = element.find('#Quick');
        setInterval(function() {
          targetElement.css('color',newColor);
        },3000)
      })
      scope.test = 'Quick Directions'
    },

    templateUrl:'./dmHeader.html'

    }
  
})
