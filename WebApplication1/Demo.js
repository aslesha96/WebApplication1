var MyApp = angular.module("MyApp", ['ngRoute']);

MyApp.config(['$routeProvider',
function ($routeProvider) {
    $routeProvider.
        when('/RegisterPhy', {
            templateUrl: 'Views/RegisterPhy.html',
            controller: 'Phycontroller'
        }).
        when('/RegisterPat', {
            templateUrl: 'Views/RegisterPat.html',
            controller: 'Patcontroller'
        }).
    otherwise({
        redirectTo: '/'
    }); 
}]);


MyApp.controller("Phycontroller", function ($scope) {
    $scope.message = "physician page";
});

MyApp.controller("Patcontroller", function ($scope) {
    $scope.message = "patients  page";
});