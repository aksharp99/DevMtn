var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
app.use(express.static('angular-app'));
app.use(cors());
app.use(bodyParser.json());
// app.use(middleware.addHeaders);
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

app.get('/name', mainCtrl.name);
app.get('/location', mainCtrl.location);
app.get('/occupations', mainCtrl.occupations);
app.get('/occupations/latest', mainCtrl.latestOccupation);
app.get('/hobbies', mainCtrl.hobbies);
app.get('/hobbies/:type', mainCtrl.hobbiesType);
app.get('/skills', mainCtrl.skills);
app.get('/secrets/:username/:pin', middleware.verifyUser, mainCtrl.secrets);

app.put('/name', mainCtrl.changeName);
app.put('/location', mainCtrl.changeLocation);

app.post('/hobbies', mainCtrl.addHobby);
app.post('/occupations', mainCtrl.addOccupation);
app.post('/skills', middleware.generateId, mainCtrl.addSkill);

app.listen(8989, function() {
  console.log('I is working!!');
});
