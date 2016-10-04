angular.module('miniRouting', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/');

$stateProvider
.state('home', {
  url: '/',
  controller:'homeCtrl',
  templateUrl: '/home/homeTmpl.html'
})

.state('settings',{
  url:'/settings',
  controller:'settingsCtrl',
  templateUrl: '/settings/settingsTmpl.html'
})

.state('products',{
  url: '/products/:id',
  controller:'productsCtrl',
  templateUrl: '/products/productTmpl.html'
})
})
