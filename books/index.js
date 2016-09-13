// var http = require('http');
//
// http.createServer(function(request, response) {
//
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//
//   response.end('Hello World WHATS UPPPPPPPPPP!!!!!!!\n');
// }).listen(8081);
//
// console.log('Server running at http://127.0.0.1:8081/');

var express = require('express');
var bodyParser = require('body-parser');

var books = [
    {
      title: 'Mistborn',
      author: 'Brennan',
      rating: 2

    },
    {
      title: 'Fifa',
      author: 'Yoba',
      rating: 5
    },
    {
      title: 'Battlefield',
      author: 'Activision',
      rating: 2
    }
];



var app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  console.log('every single time');
  next();
})

app.get('/books', function (req, res, next) {
  res.status(200).json(books);
  console.log('hello angular');

});

app.post('/books', function(req, res, next) {
  console.log(req.body);
  res.status(200).json(books);
})

app.listen(8080, function() {
  console.log('listening on port 8080');
});
