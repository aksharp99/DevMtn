angular.module('myApp',['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

  // $urlRouterProvider.otherwise('/auth/github');

  $stateProvider
  .state('home',{
    url:'/home',
    templateUrl:'./templates/home.html',
    controller:'homeCtrl'
  })
  .state('friend',{
    url:'/friend/:github_username',
    templateUrl:'./templates/friend.html',
    controller:'friendCtrl'
  })
  .state('redirect',{
    url:'/auth/github',
    templateUrl:'./templates/login.html',
    controller:'loginCtrl'
  })

})
