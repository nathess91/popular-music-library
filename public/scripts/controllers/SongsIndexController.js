angular
  .module('popMusicLibrary')
  .controller('SongsIndexController', SongsIndexController);

SongsIndexController.$inject = ['$http'];

function SongsIndexController($http) {
  var vm = this;
  vm.newSong = {};
  vm.newSong = {
    title: '',
    artist: '',
    year: '',
    writers: [ '' ],
    producers [ '' ],
    albumArt: ''
  };

  // GET ALL SONGS
  $http({
    method: 'GET',
    url: '/api/songs'
  }).then(function success(response) {
    vm.songs = response.data;
  }, function error(response) {
    console.log('There was an error getting the data', response);
  });

  // CREATE A SONG
  vm.createSong = function() {
    $http({
      method: 'POST',
      url: '/api/songs',
      data: vm.newSong,
    }).then(function success(response) {
      vm.songs.push(response.data);
    }, function error(response) {
      console.log('There was an error posting the data', response);
    });
  }

  // EDIT A SONG
  vm.editSong = function(song) {
    $http({
      method: 'PUT',
      url: '/api/songs/' + song._id,
      data: song
    }).then(function success(json) {
    }, function error(response) {
      console.log('There was an error editing the data', response);
    });
  }

  // DELETE A SONG
  vm.deleteSong = function(song) {
    $http({
      method: 'DELETE',
      url: '/api/songs/' + song._id
    }).then(function success(json) {
      var index = vm.songs.indexOf(song);
      vm.songs.splice(index, 1);
    }, function error(response) {
      console.log('There was an error deleting the data', response);
    });
  }

}
