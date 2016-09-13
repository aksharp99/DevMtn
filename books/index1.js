var express = require('express');
var bodyParser = require('body-parser');

var movies = [
  'movie about two brothers',
  'a film',
  'batman - the bat exterminator'
];


var app = express();

app.use(bodyParser.json());

app.get('/movies', function(req, res, next) {
  res.status(200).json(movies);
});

app.post('/movies', function(req, res, next) {
  movies.push(req.body.name);
  res.status(200).json(movies);
});

app.listen(3000, function() {
  console.log('hey, it running');
});
