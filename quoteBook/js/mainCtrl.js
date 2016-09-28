angular.module('quoteBook').controller('mainCtrl', function($scope, dataService) {

$scope.getQuotes = dataService.getQuotes();

$scope.deleteMe = function(textToRemove) {
  dataService.removeData(textToRemove);
}

$scope.addQuote = function(){
  var newQuote = {
    text:$scope.newQuoteText,
    author:$scope.newQuoteAuthor
  }
  if(dataService.addData(newQuote))
  {
    $scope.newQuoteText = '';
    $scope.newQuoteAuthor = '';
  }
}




})
