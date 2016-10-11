var skittles = require('./skittles');
var _ = require('underscore');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

var books = [
  {
  title:"The great divorce",
  author: "CS Lewis"
},
{
  title: "Little Brother",
  author: 'Unknown'
},
{
  title: "Wild Sheep Chase",
  author: "Aruki Marukami"
}
];

console.log(skittles.title);
console.log(skittles.eat());

app.get('/', function(req, res) {
  res.send("Hello Akshar");
})

app.get('/api/books', function(req, res) {
  res.json(books);
})

app.post('/api/books', function(req, res) {
  console.log('new book added: ',req.body);
  books.push(req.body);
  res.end();
})



app.listen(3000, function() {
  console.log("Listening on port 3000");
});
