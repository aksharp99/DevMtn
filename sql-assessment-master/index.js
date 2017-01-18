var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
//Need to enter username and password for your database
// var connString = "postgres://username:password@localhost/assessbox";
var connString = "postgres://localhost/assessbox";

var app = express();

app.use(bodyParser.json());
app.use(cors());

//The test doesn't like the Sync version of connecting,
//  Here is a skeleton of the Async, in the callback is also
//  a good place to call your database seeds.
var db = massive.connect({connectionString : connString},
  function(err, localdb){
    db = localdb;
    app.set('db', db);

    //
    // db.user_create_seed(function(){
    //   console.log("User Table Init");
    // });
    // db.vehicle_create_seed(function(){
    //   console.log("Vehicle Table Init")
    // });
})




module.exports = app;
var userCtrl = require('./controllers/userCtrl');

//ENDPOINTS//

app.get('/api/users',userCtrl.getAllUsers);
app.get('/api/vehicles',userCtrl.getAllVehicles);
app.post('/api/user',userCtrl.postUser);
app.post('/api/vehicle',userCtrl.postVehicle);

app.listen('3000', function(){
  console.log("Successfully listening on : 3000")
})
