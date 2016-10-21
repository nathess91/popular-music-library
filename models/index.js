var mongoose = require('mongoose');
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/popular-music-library");

var Song = require('./song');

module.exports.Song = Song;
