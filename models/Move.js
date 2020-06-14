const mongoose = require('mongoose');

const MoveSchema = mongoose.Schema()

module.exports = mongoose.model('Move', MoveSchema)