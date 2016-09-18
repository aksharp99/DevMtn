angular.module('aksharApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')
  $stateProvider
  .state('aboutMe' {
    url: '/',
    controller: 'ctrl',
    templateUrl: 'aboutMe.html'
  })
  .state('hobbiesOccupations', {
    url: '/me',
    controller: 'ctrl',
    templateUrl: 'hobbiesOccupations.html'
  })
  .state('skills', {
    url: '/skill',
    controller: 'ctrl',
    templateUrl: 'skills.html'
  })
});
