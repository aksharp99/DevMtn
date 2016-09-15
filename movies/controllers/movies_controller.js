var movies = require('../models/movies');

module.exports = {
  index: function(req, res, next) {
     res.status(200).json(movies);
  }
};
