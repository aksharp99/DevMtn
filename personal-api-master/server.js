var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');
app.use(bodyParser.json());
app.use(middleware.addHeaders);

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOccupation);
app.get('/hobbies',mainCtrl.getHobbies);
app.get('/hobbies/:type',mainCtrl.getHobbiesType);
app.get('/family',mainCtrl.getFamily);
app.get('/family/:gender',mainCtrl.getFamilyGender);
app.get('/restaurants',mainCtrl.getRestaurants);
app.get('/restaurants/rating',mainCtrl.getFilteredRatings);
app.get('/restaurants/:name',mainCtrl.getFavoriteRestaurant);

app.put('/name',mainCtrl.changeName);
app.put('/location',mainCtrl.changeLocation);

app.post('/hobbies',mainCtrl.addHobbies);
app.post('/occupations',mainCtrl.addOccupations);
app.post('/family',mainCtrl.addFamily);
app.post('/restaurants',mainCtrl.addRestaurants);

app.listen(8989, function() {
  console.log('port 8989 is working!');
})
