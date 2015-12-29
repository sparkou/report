var reportApp = angular.module('reportApp', ['ui.router', 'ui.bootstrap']);

reportApp.config(function($stateProvider){
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "partials/home.html"
        })
        .state('feature', {
            url: "/:type",
            templateUrl: "partials/jobList.html",
            controller: "JobListCtrl"
        })
        .state('job', {
            url: "/:type/job/:jobName",
            abstract: true,
            templateUrl: "partials/workspace.html",
            controller: "WorkspaceCtrl"
        })
        .state('job.detail', {
            url: "/:key",
            templateUrl: "partials/dataList.html",
            controller: "JobDetailCtrl"
        })
        .state('job.summary', {
            url: "/summary",
            templateUrl: "partials/summary.html",
            controller: "SummaryCtrl"
        })
        .state('job.aca', {
            url: "/aca",
            templateUrl: "partials/acaPage.html",
            controller: ""
        })
});