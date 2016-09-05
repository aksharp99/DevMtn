angular.module('miniRouting', ['ui.router'])
.config($stateProvider, urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider
  .state('home' {
    url: '/',
    templateUrl: 'home/homeTmpl.html',
    controller: 'homeCtrl'
  })

})
