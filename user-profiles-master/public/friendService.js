angular.module('userProfiles')
.factory('friendService', function( $http ) {
  return {

    login: function( user ) {
      /* FIX ME */
      return $http({
        method:'POST',
        url:'/api/login',
        data:user
      })
    },

    getFriends: function() {
    	/* FIX ME */
      return $http({
        method:'GET',
        url:'/api/profiles'
      })
    }
  }
});
