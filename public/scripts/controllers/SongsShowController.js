angular
  .module('popMusicLibrary')
  .controller('SongsShowController', SongsShowController);

  SongsShowController.$inject = ['$http', '$routeParams'];

  function SongsShowController($http, $routeParams) {
    var vm = this;
    var songId = $routeParams.id;

    $http({
      method: 'GET',
      url: '/api/songs/' + songId
    }).then(function success(json) {
      vm.song = json.data;
    });
  }
