var db = require('../models');

// GET ALL SONGS
function index(request, response) {
  db.Song.find({}, function(error, allSongs) {
    response.json(allSongs);
  });
}

// CREATE A NEW SONG
function create(request, response) {
  console.log('body', request.body);
  db.Song.create(request.body, function(error, song) {
    if (error) { console.log('error', error); }
    console.log(song);
    response.json(song);
  });
}

// SHOW ONE BOOK
function show(request, response) {
  db.Song.findById(request.params.songId, function(error, foundSong) {
    if (error) { console.log('songsController.show error', error); }
    console.log('songsController.show responding with', foundSong);
    response.json(foundSong);
  });
}

// DELETE A SONG
function destroy(request, response) {
  db.Song.findOneAndRemove({ _id: request.params.songId }, function(error, foundSong) {
    response.json(foundSong);
  });
}

// UPDATE A SONG
function update(request, response) {
  console.log('updating with data', request.body);
  db.Song.findById(request.params.songId, function(error, foundSong) {
    if (error) { console.log('songsController.update error', error); }
    foundSong.title = request.body.title;
    foundSong.artist = request.body.artist;
    foundSong.year = request.body.year;
    foundSong.writers = request.body.writers;
    foundSong.producers = request.body.producers;
    foundSong.albumArt = request.body.albumArt;
    foundSong.save(function(error, savedSong) {
      if (error) { console.log(error, savedSong); }
        response.json(savedSong);
    });
  });
}

module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
