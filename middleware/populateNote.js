var { Note } = require('../models/notes.js');

// will return promise - to be seperated into another file
function fetchData(req, res, next) {
    Note.findById('5b6ee11f8a888f073c50f18f').then((note) => {
        req.expressions = note;
        console.log(req.expressions);
        next();
    });
}

module.exports = {
    fetchData
};