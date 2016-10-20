var app = require('./server.js');
var db = app.get('db');

module.exports = {
  Create: function(req, res, next) {
    var product = req.body;
    db.create_product([product.name,product.description,product.price,product.imageurl],function(err,product) {
      if(err) {
        res.status(500).json(err.message)
      } else {
        res.status(200).json(product);
      }
    })
  },

  GetOne: function(req, res, next) {
    db.read_product([req.params.productId],function(err, readProduct) {
      res.status(200).json(readProduct);
    })
  },

  GetAll: function(req, res, next) {
    db.read_products(function(err,readProducts) {
      res.status(200).json(readProducts);
    })
  },

  Update: function(req, res, next) {
    console.log(req.body);
    var product = req.body;
    db.update_product([product.value, product.id],function(err,products) {
      if(err) {
        res.status(500).json(err.message);
      } else {
        res.status(200).json(products);
      }
    })
  },

  Delete: function(req, res, next) {
    db.delete_product([req.query.id],function(err,product) {
      res.status(200).json(product);
    })
  }
}
