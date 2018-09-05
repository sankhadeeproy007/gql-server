const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  name: String,
  position: String,
  isRightFooted: Boolean,
  teamId: String
});

module.exports = mongoose.model('Player', playerSchema);
