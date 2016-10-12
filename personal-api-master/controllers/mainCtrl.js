var user = require('../user.js');
console.log(user);

module.exports = {

getName: function(req, res) {
  res.status(200).json(user.name);

},

getLocation: function(req, res) {
  res.status(200).json(user.location);
},

getOccupations: function(req, res) {
  res.status(200).json(user.occupations);
},

getLatestOccupation: function(req, res) {
  res.status(200).json(user.occupations[user.occupations.length-1]);
},

getHobbies: function(req, res) {
  res.status(200).json(user.hobbies);
},

getHobbiesType: function(req, res) {
  var HobbiesType = [];
  for(var i = 0; i < user.hobbies.length; i++) {
    if(req.params.type === user.hobbies[i].type) {
        HobbiesType.push(user.hobbies[i]);
    }
}
  res.status(200).json(HobbiesType);
},

getFamily: function(req,res) {
  for(var i = 0; i < user.family.length;i++) {
    if(req.query.relation === user.family[i].relation){
      res.status(200).json(user.family[i]);
    }
  }

  res.status(200).json(user.family);
},

getFamilyGender: function(req, res) {
  var FamilyGender = [];
  for(var i = 0; i < user.family.length; i++) {
    if(req.params.gender === user.family[i].gender) {
        FamilyGender.push(user.family[i]);
    }
}
res.status(200).json(FamilyGender);
},

//try a .filter below:-
getRestaurants: function(req, res) {
var restaurantsRating = [];
  for(var i = 0; i < user.restaurants.length; i++) {
    if(user.restaurants[i].rating >= req.query.rating) {
    restaurantsRating.push(user.restaurants[i]);
  } else {
    res.status(200).json(user.restaurants);
  }


}
res.status(200).json(restaurantsRating);

}



}
