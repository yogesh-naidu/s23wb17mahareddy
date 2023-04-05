var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('giraffe', { title: 'Search Results Giraffe' });
});

module.exports = router;