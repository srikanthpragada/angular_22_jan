var app = angular.module('routedemo', ['ngRoute']);

app.config(
    ['$routeProvider',
     function ($routeProvider)
     {
      $routeProvider.
        when('/first', {
            templateUrl: 'first.html',
            controller: 'FirstController'
        }).
        when('/second', {
            templateUrl: 'second.html',
            controller: 'SecondController'
        }).
        otherwise({
            redirectTo: '/first'
        });
     }
    ]
 );


app.controller("FirstController",
  function ($scope) {
      $scope.message = "Message in First Controller!";
  }

);

app.controller("SecondController",
  function ($scope) {
      $scope.message = "Message in Second Controller!";
  }
);