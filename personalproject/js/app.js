angular.module('myapp',['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('homebody', {
    url:'/',
    templateUrl: '../homebody.html',
    controller: 'homebodyCtrl'
  })

  .state('productview', {
    url:'/productview',
    templateUrl: '../productview.html',
    controller: 'productviewCtrl'
  })

})
