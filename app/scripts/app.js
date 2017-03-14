'use strict';

/**
 * @ngdoc overview
 * @name contactsApp
 * @description
 * # contactsApp
 *
 * Main module of the application.
 */
angular
  .module('contactsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'ngDialog'
  ])
  .config(function ($stateProvider, $locationProvider, $httpProvider) {
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    
    $locationProvider.html5Mode(true);
    $stateProvider.state({
        name: 'contacts'
        , url: '/'
        , controller: 'ContactsCtrl'
        , templateUrl: 'views/contacts.html'
    });
  });
