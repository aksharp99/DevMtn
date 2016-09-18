var myData = require('../models/my_data.js');

module.exports = {

  name: function(req, res, next) {
    res.status(200).json(myData.name);
  },

  location: function(req, res, next) {
    res.status(200).json(myData.location);
  },

  occupations: function(req, res, next) {
    if(req.query.order === 'asc') {
      var ascData = myData.occupations.sort();
      res.status(200).json(ascData);
    }
    else if (req.query.order === 'desc') {
      var descData = myData.occupations.sort().reverse();
      res.status(200).json(descData);
    }
    else {
    res.status(200).json(myData.occupations);
    }

  },

  latestOccupation: function(req, res, next) {
    res.status(200).json(myData.latestOccupation);
  },

  hobbies: function(req, res, next) {
    res.status(200).json(myData.hobbies);
  },

  hobbiesType: function(req, res, next) {
    var hobbyArr = [];
    for (var i = 0; i < myData.hobbies.length; i++) {
      if(req.params.type === myData.hobbies[i].type) {
        hobbyArr.push(myData.hobbies[i]);
      }
    }
    res.status(200).json(hobbyArr);
  },

  skills: function(req, res, next) {
    for (var j = 0; j < myData.skills.length; j++) {
      if(req.query.experience === myData.skills[j].experience) {
        res.status(200).json(myData.skills[j]);
      }
      else {
        res.status(200).json(myData.skills);
      }
    }
  },

  secrets: function(req, res, next) {
    res.status(200).json(myData.secrets);
  },

  changeName: function(req, res, next) {
    myData.name = req.body.name;
    res.status(200).json(myData.name);
  },

  changeLocation: function(req, res, next) {
    myData.location = req.body.location;
    res.status(200).json(myData.location);
  },

  addHobby: function(req, res, next) {
    myData.hobbies.push(req.body);
    res.status(200).json(myData.hobbies);
  },

  addOccupation: function(req, res, next) {
    myData.occupations.push(req.body.name);
    res.status(200).json(myData.occupations);
  },

  addSkill: function(req, res, next) {
    myData.skills.push(req.body);
    res.status(200).json(myData.skills);
  }


}
