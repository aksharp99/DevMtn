'use strict';

angular.module('chattyApp')
  .controller('MainCtrl', function ( $scope, messageService ) {
    messageService.getMessages().then(function ( response ) {
      $scope.messages = response.data;
    });

    $scope.addMessage = function ( message, username) {
      if (message) {
        messageService.addMessage(message, username).then(function ( response ) {
          $scope.messages = response.data;
        });
      }
    };

    $scope.addPic = function( pic ) {
      console.log(pic);
      if (pic) {
        $scope.pics = {pic:pic};
      }
    }
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
