//include http, fs and url module
var http = require('http'),
    express = require('express'),
    cors = require('cors'),
    massive = require('massive'),
    bodyParser = require('body-parser'),
    pictureCtrl = require('./pictureCtrl'),
    fs = require('fs'),
    path = require('path'),
    url = require('url');
    imageDir = './public/images/deals/';

var app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/public'));

//MASSIVE//
var massiveUrl = 'postgres://localhost/cart';
var massiveServer = massive.connectSync({
  connectionString: massiveUrl
});

app.set('db', massiveServer);
var db = app.get('db');

//ENDPOINTS//
app.post('/api/user', function(req, res, next) {
  db.user_create([req.body.name,req.body.phone],function(err, user) {
    console.log('this is req body user id: ',req.body.user_id)
    console.log('this is req body name: ',req.body.name);
    console.log('this is req body phone: ',req.body.phone);
    if(err) {
      res.status(500).send(err);
    }

    // db.product_create([req.body.user_id], function(err, product) {
    //   console.log('this is req body user_id: ',req.body.user_id);
    //   if(err) {
    //     return res.status(500).send(err);
    //   }
    //   res.status(200).send('User and product created successfully');
    // });
  });
});

app.post('/api/product', function(req, res ,next) {
  db.product_create([req.body.user_id,req.body.quantity,req.body.price],function(err, product) {
    if (err) {
      res.status(500).send(err);
    }
  })
})



app.get('/api/user', function(req, res, next) {
  db.users(function(err, users) {
    if(err) {
      res.status(500).send(err);
    }
   res.status(200).send(users);
  })
});

app.get('/api/product', function(req, res, next) {
  db.products(function(err, products) {
    if(err) {
      res.status(500).send(err);
    }
    res.status(200).send(products);
  })
});

app.get('/api/userproduct', function(req, res, next) {
  db.user_product_join(function(err, userproduct) {
    if(err) {
      res.status(500).send(err);
    }
    res.status(200).send(userproduct);
  })
});

//create http server listening on port 3333
// http.createServer(function(req, res) {
//   //use the url to parse the requested url and get the image name
//   var query = url.parse(req.url,true).query;
//   pic = query.image;
//
//   if(typeof pic === 'undefined') {
//     getImages(imageDir, function(err, files) {
//       var imageList = JSON.stringify(files);
//       res.writeHead(200, {'Content-type':'application/json'});
//       res.end(imageList);
//     });
//   } else {
//     //read the image using fs and send the image content back in the response
//     fs.readFile(imageDir + pic, function(err, content) {
//       if(err) {
//         res.writeHead(400, {'Content-type':'text/html'})
//         console.log(err);
//         res.end("No such image");
//       } else {
//         //specify the content type in the response will be an image
//         res.writeHead(200,{'Content-type':'image/jpg'});
//         res.end(content,"binary");
//       }
//     });
//   }
// }).listen(3334);
app.get("/photos", function(req, res) {
  //use the url to parse the requested url and get the image name
  var query = url.parse(req.url,true).query;
  pic = query.image;

  if(typeof pic === 'undefined') {
    getImages(imageDir, function(err, files) {
      var imageList = JSON.stringify(files);
      res.writeHead(200, {'Content-type':'application/json'});
      res.end(imageList);
    });
  } else {
    //read the image using fs and send the image content back in the response
    fs.readFile(imageDir + pic, function(err, content) {
      if(err) {
        res.writeHead(400, {'Content-type':'text/html'})
        console.log(err);
        res.end("No such image");
      } else {
        //specify the content type in the response will be an image
        res.writeHead(200,{'Content-type':'image/jpg'});
        res.end(content,"binary");
      }
    });
  }
});

app.get('/api/pictures',pictureCtrl.get);
// console.log("Server running at http://localhost:3333/");

//get the list of jpg files in the image dir
function getImages(imageDir, callback) {
  var fileType = '.jpg',
  files = [], i;
  fs.readdir(imageDir, function(err, list) {
    for(i=0; i<list.length; i++) {
      if(path.extname(list[i]) === fileType) {
        files.push(list[i]); //store the file name into the array files
      }
    }
    callback(err,files);
  });
}

app.listen(3333, function() {
    console.log("Listening on port 3333");
});
