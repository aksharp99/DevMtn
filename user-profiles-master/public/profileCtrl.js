angular.module('userProfiles')
.controller('profileCtrl', function( $scope, userInfo ) {
	console.log('this is userinfo: ',userInfo);
	$scope.currentUser = userInfo.data.currentUser;
	$scope.friends = userInfo.data.friends;
});
