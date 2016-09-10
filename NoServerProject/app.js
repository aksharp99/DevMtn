angular.module('marioApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  // $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    controller: 'homeController',
    url:'/',
    templateUrl:'home/home.html'
  })
  .state('score', {
    controller: 'scoreController',
    url: '/score',
    templateUrl: 'score/score.html'
  })
  .state('teleport', {
    controller: 'teleportController',
    url: '/teleport',
    templateUrl: 'teleport/teleport.html'
  })



})
