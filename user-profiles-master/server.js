var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var cors = require('cors');
var session = require('express-session');
var config = require('./config.js');
var profile = require('./controllers/profileCtrl.js');
var user = require('./controllers/userCtrl.js');
var corsOptions = {
  origin: 'http://localhost:8080'
};
app.use(cors(corsOptions));
app.use(session({ secret: config.sessionSecret}));
app.use(express.static(__dirname + '/public'));

app.post('/api/login', user.login);

app.get('/api/profiles', profile.simple);















app.listen(8080, function() {
  console.log('Port 8080 is working!');

})
