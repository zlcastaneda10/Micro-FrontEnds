const mongoose = require('mongoose');
const {Schema} = mongoose;

const TaskSchema = new Schema({
    description: {type: String},
    type: {type: String}
});

module.exports = mongoose.model('Task', TaskSchema);