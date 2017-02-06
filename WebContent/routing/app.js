'use strict';

var app = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatControllers'
]);

app.config(['$locationProvider','$routeProvider',
  function ($locationProvider, $routeProvider) {
      
	  $locationProvider.hashPrefix('');   // needed 
      
      $routeProvider.
        when('/phones', {
            templateUrl: 'phone-list.html',
            controller: 'PhoneListCtrl'
        }).
        when('/phones/:phoneId', {
            templateUrl: 'phone-detail.html',
            controller: 'PhoneDetailCtrl'
        }).
        otherwise({
            redirectTo: '/phones'
        });
  }]);

