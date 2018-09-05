const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: String,
  leaguePosition: Number,
  city: String
});

module.exports = mongoose.model('Team', teamSchema);
