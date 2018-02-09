(function() {
  function config($locationProvider, $stateProvider) {
    $locationProvider
        .html5Mode({
          enabled: true,
          requireBase: false
        });

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeCtrl as home',
        templateUrl: '/templates/home.html'
      })
    $stateProvider
      .state('about', {
        url: '/about',
        controller: 'AboutCtrl as about',
        templateUrl: '/templates/about.html'
      })
    $stateProvider
      .state('projects', {
        url: '/projects',
        controller: 'ProjectsCtrl as projects',
        templateUrl: '/templates/projects.html'
      })
    $stateProvider
      .state('contact', {
        url: '/contact',
        controller: 'ContactCtrl as contact',
        templateUrl: '/templates/contact.html'
      });
  }
  angular
      .module('portfolio', ['ui.router'])
      .config(config);
})();
