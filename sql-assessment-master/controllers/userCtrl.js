// var app = require('./../index.js');

var app = require('./../index.js');
var massive = require('massive');

var connString = "postgres://localhost/assessbox";
var db = massive.connect({connectionString : connString},
  function(err, localdb){
    db = localdb;
    app.set('db', db);
})

module.exports = {
  getAllUsers:function(req, res, next) {
    db.getUsers(function(err,users){
      if(err){
        console.log(err);
        return res.send(err);
      }
      res.send(users);
    })
  },
  getAllVehicles:function(req,res,next) {
    db.getVehicles(function(err,vehicles){
      if(err){
        console.log(err);
        return res.send(err);
      }
      res.send(vehicles);
    })
  },
  postUser:function(req,res,next) {

    db.create_user([req.body.first_name,req.body.last_name,req.body.email],function(err, createusers){

      if(err){
        console.log(err);
        return res.send(err);
      }

      res.send(createusers);

    })
  },
  postVehicle:function(req,res,next) {
    db.create_vehicle([req.body.make,req.body.model,req.body.year,req.body.owner_id],function(err,xyz){
      console.log(xyz);
      if(err){
        console.log(err);
        return res.send(err);
      }
      res.send(xyz);

    })
  }
}
