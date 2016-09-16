var express = require('express');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var cors = require('cors');
var config = require('./config');
var profileCtrl = require('./controllers/profileCtrl');
var userCtrl = require('./controllers/userCtrl');
var app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(expressSession({secret: config.sessionSecret}));
app.use(express.static(__dirname + '/public'));
console.log(__dirname);
var corsOptions = {
  origin: 'http://localhost:8999'
};

app.post('/api/login', userCtrl.login);






app.listen(8999, function() {
  console.log('I is working!!');

})
