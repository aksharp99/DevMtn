var movies = require('../movies.json');

module.exports = {
    get: function(req, res, next){
      //http://localhost:3000/api/movies?page=18&pageSize=24
      var page = (req.query.page || 1) / 1;
      var pageSize = (req.query.pageSize || 20) / 1;
      var startIndex = (page - 1) * pageSize;

      var first20Movies = movies.slice(startIndex, startIndex + pageSize);
      res.send(first20Movies);
    },
    getById: function(req, res, next) {
      //http://localhost:3000/api/movies/2
      var movieId = req.params.movieId;
      var movie = movies[movieId];

      var responseObj = {
        message: "You asked for movie ID "+movieId,
        movie: movie
      }

      res.send(responseObj);
    },
    modify: function(req, res, next){
      //Which item to modify
      var movieId = req.params.movieId;
      //What data to change it to
      //http://localhost:3000/api/movies/272?Worldwide_Gross=20000

      //Get movie to modify
      //for every property in req.query
      //if property is legit(hasownproperty) on query and on movieToModify
      //update movie to modify

      var movieToModify = movies[movieId];
      for(var prop in req.query) {
        if(req.query.hasOwnProperty(prop) && movieToModify.hasOwnProperty(prop)) {
          movieToModify[prop] = req.query[prop];


        }
      }

    },
    add: function(req, res, next){
      movies.push(req.body);
      res.status(200).end();
    },
    delete: function(req, res, next){
      console.log("You want to delete: "+req.params.movieId);
      movies.splice(req.params.movieId, 1);
      res.status(200).end();
    }
}
