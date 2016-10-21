var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SongSchema = new Schema({
  title: String,
  artist: String,
  year: String,
  writers: [ String ],
  producers: [ String ],
  albumArt: String
});

var Song = mongoose.model('Song', SongSchema);

module.exports = Song;
