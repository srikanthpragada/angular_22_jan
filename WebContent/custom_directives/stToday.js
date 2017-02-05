var app = angular.module('stDirectives', [])
.controller('Controller', ['$scope', function ($scope) {
    $scope.today = new Date().toString();
}]);

app.directive('stToday', function () {
    return {
          restrict: 'E',
          template: 'Today is : {{today}}'
    };
});

// Manipulate DOM 
app.directive('stNow', function () {
    return {
        restrict: 'E',
        link : function (scope, element, attrs) {
            element.text(new Date());
        }
    };
});

app.directive('stTitle', function () {
        return {
            replace: true,
            transclude : true,
            template:  "<h1 ng-transclude></h1>"
        };
})

app.directive('stCode', function () {
    return {
        restrict: 'EA',
        transclude: true,
        replace :true,
        template : '<pre ng-transclude></pre>'
    };
});