const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog')

const db = mongoose.connection

db.on('error', console.error.bind(console, 'db is not Connected !!'))

db.once('open', (e) => {
    if (e) {
        console.log(e);
        return false;
    }
    console.log('db is connected');
})

module.exports = db;