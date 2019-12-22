const mongoose =require('mongoose');
const URI = 'mongodb://admin:abc123@ds241658.mlab.com:41658/todos';
mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;