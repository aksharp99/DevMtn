var express = require('express');
var bodyParser  = require('body-parser');
var config = require('./config.json');
var moviesController = require('./controllers/movies_controller');
var app = express();

app.use(bodyParser.json());

app.get('/movies', moviesController.index);
app.get('/movies/:id', moviesController.show);
app.post('/movies', moviesController.create);
app.put('/movies/:id', moviesController.update);
app.delete('/movies/:id', moviesController.destroy);

app.listen(config.port, function() {
  console.log('I is running ok');
})
