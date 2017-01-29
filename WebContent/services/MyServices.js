var app = angular.module('MyServices', []);

app.service('DateService',
    // provide constructor function, which creates an object 
    function () {
        this.message = "Date Service!";
        this.year = function () {
            var today = new Date();
            return today.getFullYear();
        };
    }
);


app.factory('TimeService',
    // factory function that returns an instance of service 
    function () {
        return {
            'hours': new Date().getHours(),
            'minutes': new Date().getMinutes(),
            'seconds': new Date().getSeconds(),
            getTime : function() {
                return new Date().toString();
            }
        }
    }
);




