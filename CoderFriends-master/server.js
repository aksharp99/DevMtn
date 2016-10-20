var express = require('express');
var app = express();
var session = require('express-session');
var passport = require('passport');
var passportgithub2 = require('passport-github2');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var cors = require('cors');
app.use(cors());

app.use(express.static(__dirname+'/public'));



app.listen(3000, function() {
  console.log('Listening on port 3000!');
})
