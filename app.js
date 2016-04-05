var reportApp = angular.module('reportApp', ['ui.router', 'ui.bootstrap', 'LocalStorageModule']);

reportApp.config(function (localStorageServiceProvider) {
    localStorageServiceProvider
        .setPrefix('reportApp')
        .setStorageType('localStorage')
        .setNotify(true, true)
});

reportApp.config(function($stateProvider){
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "partials/home.html"
        })
});