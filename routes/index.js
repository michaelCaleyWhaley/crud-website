var express = require('express');
var router = express.Router();

var populateNote = require('../middleware/populateNote.js');
var updateNote = require('../middleware/updateNote.js');

var expressions = {
  title: 'Message board',
};

/* GET home page. */
router.get('/', (req, res, next) => {
  populateNote.fetchData().then((note) => {
    expressions.note = note.text;
    next();
  }).catch((error) => {
    res.send(error);
  });
}, (req, res) => {
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
