var express = require('express');
var router = express.Router();

var { Note } = require('../models/notes.js');

var expressions = {
  title: 'Express',
};


// will return promise - to be seperated into another file
function fetechData() {
  return new Promise((resolve, reject) => {
    Note.findById('5b6ee11f8a888f073c50f18f').then((note) => {
      expressions.note = note.text;

    });
  });
}



/* GET home page. */
router.get('/', (req, res, next) => {


  res.render('index', expressions);
});

module.exports = router;
