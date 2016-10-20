var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');

var app = module.exports = express();


app.use(bodyParser.json());
app.use(cors());

var massiveInstance = massive.connectSync({connectionString:"postgres://aksharpatel:@localhost/ProductDatabase"});

app.set('db',massiveInstance);

var db = app.get('db');

var productsCtrl = require('./productsCtrl.js');

app.get('/products', productsCtrl.GetAll);
app.get('/products/:productId', productsCtrl.GetOne);
app.put('/update',productsCtrl.Update);
app.post('/addproducts',productsCtrl.Create);
app.delete('/deleteproduct',productsCtrl.Delete);

app.listen(8000, function() {
  console.log('Port 8000 is working');
})
