const mongoose = require('mongoose');

const URI = 'mongodb://localhost/sinemdev';
//const URI = 'mongodb://ariel:arielmp90@ds145951.mlab.com:45951/escuela-database'

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;