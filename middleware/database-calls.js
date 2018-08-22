const { Note } = require('../models/notes.js');

Note.findById('5b6ee11f8a888f073c50f18f').then((note) => {
    console.log(note);
});