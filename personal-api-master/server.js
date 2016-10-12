var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

app.use(middleware.addHeaders);

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest',mainCtrl.getLatestOccupation);
app.get('/hobbies',mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesType);
app.get('/family',mainCtrl.getFamily);
app.get('/family/:gender',mainCtrl.getFamilyGender);
app.get('/restaurants',mainCtrl.getRestaurants);





app.listen(3000, function() {
  console.log('port 3000 is working!');
})
