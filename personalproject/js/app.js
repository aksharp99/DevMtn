angular.module('myapp',['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('homebody', {
    url:'/',
    templateUrl: '../homebody.html',
    controller: 'homebodyCtrl.js'
  })

})
