const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var mongoUrl = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost:27017/test';

mongoose.connect(mongoUrl, { useNewUrlParser: true });

const Schema = mongoose.Schema;

const noteSchema = new Schema({
    text: String
});

const Note = mongoose.model('Note', noteSchema);

module.exports = {
    Note
};