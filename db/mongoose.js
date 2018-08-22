const mongoose = require('mongoose');

// Because promise used to be a third party addition to JS you need to tell Mongoose to use built in version
mongoose.Promise = global.Promise;
const uri = process.env.MongoDB_URI || 'mongodb://localhost:27017/test';
mongoose.connect(uri, { useNewUrlParser: true }
);

module.exports = {
    mongoose
};