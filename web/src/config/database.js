const mongose = require('mongoose')

const url = 'mongodb:/localhost:27017/todo';

mongoose.connect(url, {userNewUrlParser: true});

module.exports = mongoose;

