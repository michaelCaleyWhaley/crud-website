var express = require('express');
var router = express.Router();

var expressions = {
  title: 'Express',
};

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', expressions);
});

module.exports = router;
