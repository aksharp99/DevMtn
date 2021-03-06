var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
app.use(bodyParser.json());
app.use(cors());

var messages = ['Golden State Warriors','Cleveland Cavaliers','Oklahoma City Thunder'];

app.get('/', function(req, res) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection':'1; mode=block',
    'X-Frame-Options':'SAMEORIGIN',
    'Content-Security-Policy':"default-src 'self' devmountain.github.io"
  }).send(JSON.stringify(messages));
});

app.post('/', function(req, res) {
  console.log(req.body);
  messages.push({
    username: req.body.username,
    message: req.body.message,
    time: new Date()
  });

  res.status(200).set({
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection':'1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy':"default-src 'self' devmountain.github.io"
  }).send(JSON.stringify(messages));

});









app.listen(8989, function() {
  console.log('Port 8989 is working!');
})
