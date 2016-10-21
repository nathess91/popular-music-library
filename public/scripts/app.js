angular
  .module('popMusicLibrary', ['ngRoute'])
  .config(config)

config.$inject = ['$routeProvider', '$locationProvider'];

function config($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/songs',
      controllerAs: 'songsIndexCtrl',
      controller: 'SongsIndexController'
    })
    .when('/songs/:id', {
      templateUrl: '/templates/songs-show',
      controllerAs: 'songsShowCtrl',
      controller: 'SongsShowController'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
}
