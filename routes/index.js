let express = require('express');
let router = express.Router();

let data = require('./../data.json');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page',
      data : data,
      baseLink : "https://example.com/food?" });
});

module.exports = router;
