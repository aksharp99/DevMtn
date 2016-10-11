angular.module('journal', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider


  .state('demox',{
    controller: 'demoxCtrl',
    url: '/demox',
    templateUrl: './demox.html'
  })

  .state('demoy', {
    controller: 'demoyCtrl',
    url: '/demoy',
    templateUrl: './demoy.html'
  })


})
