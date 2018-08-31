var { Note } = require('../models/notes.js');

// will return promise - to be seperated into another file
function fetchData(req, res, next) {
    return Note.findById('5b6ee11f8a888f073c50f18f');
}

function createNote() {
    var newNote = new Note({
        "text": "Please write something",
        "_id":'5b6ee11f8a888f073c50f18f'
    });
    newNote.save().catch((e) => {
        console.log(e);
    });
}

module.exports = {
    fetchData,
    createNote
};