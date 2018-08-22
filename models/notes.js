const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });

const Schema = mongoose.Schema;

const noteSchema = new Schema({
    text: String
});

const Note = mongoose.model('Note', noteSchema);

module.exports = {
    Note
};