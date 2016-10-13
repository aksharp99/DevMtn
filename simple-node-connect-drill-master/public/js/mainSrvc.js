angular.module("myChats").service("mainSrvc", function($http){

  this.getChats = function(){
    //TODO Call server to get the chats
    return $http({
      method: 'GET',
      url:'/api/chats'
    }).then(function(response){
      if(response.status === 200) {
        return response.data;
      }
    })
  }

  this.addChats = function(chat){
    //TODO Call server to add to chats
    return $http({
      method: 'POST',
      url:'/api/chats',
      data:{message: chat}
    })
  }

  this.deleteChats = function(){
    //TODO Call server to whipe all the chats
  }

  this.setScreenname = function(screenname) {
    return $http({
      method:'POST',
      url:'/api/screenname',
      data: {name: screenname}
    })
  }
});
