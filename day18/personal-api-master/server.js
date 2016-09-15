var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

app.listen(8080, function() {
  console.log('I is running okay');
})
