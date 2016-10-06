angular.module('journal', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/');

$stateProvider

.state('price', {
  url: '/price',
  templateUrl: './price/price.html',
  controller: 'priceCtrl'
})

.state('location', {
  url: '/location',
  templateUrl: './location/location.html',
  controller: 'locationCtrl'
})

.state('about', {
  url: '/about',
  templateUrl: './about/about.html',
  controller: 'aboutCtrl'
})


})
