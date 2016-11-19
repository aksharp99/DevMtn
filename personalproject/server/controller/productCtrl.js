var app = require('../server');
var db = app.get('db');

console.log(Object.keys(db));

module.exports = {
  getAllProducts:function(req, res, next){

    db.get_all_products(function(err, products){
      if(err){
        console.log(err)
        return res.send(err);
      }
      res.send(products);
    })
  },
  getProductById:function(req, res, next){
    db.get_product_by_id([req.params.id],function(err, products){
      if(err){
        console.log(err)
        return res.send(err);
      }
      res.send(products);
    })
  }
}
