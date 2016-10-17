var user = require('../user.js');
module.exports = {
  getName: function(req, res) {
    res.status(200).json(user.name);
  },
  getLocation: function(req, res) {
    res.status(200).json(user.location);
  },
  getOccupations: function(req, res) {

    if(req.query.order === 'desc') {
    res.status(200).json(user.occupations.sort());
    } else if(req.query.order === 'asc') {
    res.status(200).json(user.occupations.sort().reverse());
    } else {
    res.status(200).json(user.occupations);
    }

  },
  getLatestOccupation: function(req, res) {
    res.status(200).json(user.occupations[user.occupations.length-1]);
  },
  getHobbies: function(req, res) {
    res.status(200).json(user.hobbies);
  },
  getHobbiesType: function(req, res) {
    var hobbiesType=[];
    for(var i = 0; i < user.hobbies.length; i++) {
      if(req.params.type === user.hobbies[i].type) {
        hobbiesType.push(user.hobbies[i]);
      }
    }
    res.status(200).json(hobbiesType);
  },
  getFamily: function(req, res) {
    for(var i = 0; i < user.family.length; i++) {
      if(req.query.relation === user.family[i].relation) {
        res.status(200).json(user.family[i]);
      }
    }
    res.status(200).json(user.family);
  },
  getFamilyGender: function(req, res) {
    var familyGender = [];
    for(var i = 0; i < user.family.length; i++) {
      if(req.params.gender === user.family[i].gender){
        familyGender.push(user.family[i]);
      }
    }
    res.status(200).json(familyGender);
  },
  getFilteredRatings: function(req, res) {
    var restaurantsRating = [];
    for(var i = 0; i < user.restaurants.length; i++) {
      if(user.restaurants[i].rating > req.query.rating) {
        restaurantsRating.push(user.restaurants[i]);
      } else {
        res.status(200).json(restaurantsRating);
      }
    }

  },

  getRestaurants: function(req, res) {
    res.status(200).json(user.restaurants);
  },

  getFavoriteRestaurant: function(req, res) {
    var favorite = [];

    for(var i = 0; i < user.restaurants.length; i++) {
      if(req.params.name === user.restaurants[i].name) {
        favorite.push(user.restaurants[i]);
      }
    }
    res.status(200).json(favorite);
  },

  changeName: function(req, res) {
    user.name = req.body.name;
  },

  changeLocation: function(req, res) {
    user.location = req.body.location;
  },

  addHobbies: function(req, res) {
  user.hobbies.push(req.body);

},

  addOccupations: function(req, res) {
    user.occupations.push(req.body.occupation);

  },

  addFamily: function(req, res) {
    user.family.push(req.body);
  },

  addRestaurants: function(req, res) {
    user.restaurants.push(req.body);
  }

}
