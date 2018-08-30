var express = require('express');
var router = express.Router();

var populateNote = require('../middleware/populateNote.js');
var updateNote = require('../middleware/updateNote.js');

var expressions = {
  title: 'Message board',
};

/* GET home page. */
router.get('/', populateNote.fetchData, (req, res, next) => {
  expressions.note = req.expressions.text;
  res.render('index', expressions);
});

router.post('/update', (req, res, next) => {
  updateNote.updatePageNote(req.body.text).then(() => {
    next();
  });
}, (req, res) => {
  res.end();
});

module.exports = router;
