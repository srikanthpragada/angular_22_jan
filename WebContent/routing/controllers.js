'use strict';

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$rootScope', '$http',
  function ($scope, $rootScope, $http) {
      $http.get('phones.json').then(function (data) {
          $rootScope.phones = data.data;
          $scope.phones = data.data;
      });
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope','$rootScope','$routeParams',
  function ($scope, $rootScope, $routeParams) {
     
      // get details off phone 
      for(var i=0; i < $rootScope.phones.length; i++) 
    	  {
    	    var phone = $rootScope.phones[i];
    	    if ( phone.id == $routeParams.phoneId) {
    	    	 $scope.phone = phone;
    	    	 return;
    	    }
    	    	
    	  }
  }]);