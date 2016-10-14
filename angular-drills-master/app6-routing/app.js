angular.module('routingApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

$stateProvider
.state('home',{
  controller: 'homeController',
  url: '/',
  templateUrl: 'home/home.html'
})
.state('signup', {
  controller: 'signupController',
  url: '/signup',
  templateUrl: 'signup/signup.html'
})
.state('details', {
  controller: 'detailsController',
  url: '/details/:id',
  templateUrl: 'details/details.html'
})
//Change details state
//so that it takes the id

})
