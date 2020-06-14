const mongoose = require('mongoose');

const CharacterScema = mongoose.Schema()

module.exports = mongoose.model('Character', CharacterScema)