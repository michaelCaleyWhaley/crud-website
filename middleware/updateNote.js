var { Note } = require('../models/notes.js');

function updatePageNote(value) {
    return Note.findByIdAndUpdate('5b6ee11f8a888f073c50f18f', {
        "text": value
    });
}

module.exports = {
    updatePageNote
};