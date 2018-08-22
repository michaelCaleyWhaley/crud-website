var express = require('express');
var router = express.Router();

var { Note } = require('../models/notes.js');

var expressions = {
  title: 'Express',
};

/* GET home page. */
router.get('/', (req, res, next) => {

  Note.findById('5b6ee11f8a888f073c50f18f').then((note) => {
    expressions.note = note.text;
    res.render('index', expressions);
  });

  
});

module.exports = router;
