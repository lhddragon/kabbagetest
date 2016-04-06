'use strict';

angular.module('ng-gulp-hapi')
  .config(function ($stateProvider, appResolverProvider) {
    $stateProvider
      .state('main', {
        url: '/prequalify',
        views: {
          '': {
            templateUrl: 'views/main/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main',
            resolve: appResolverProvider.main
          },
          'navbar': {
            templateUrl: 'components/navbar/navbar.html',
            controller: 'NavbarCtrl',
            resolve: appResolverProvider.navbar
          },
          'prequalify-panel@main': {
            templateUrl: 'components/prequalifyPanel/prequalifyPanel.html',
            controller: 'PrequalifyCtrl',
            controllerAs: 'prequalifyCtrl'
          }
        }
      });
  });
