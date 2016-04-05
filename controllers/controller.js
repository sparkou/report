/**
 * Created by spark.ou on 12/29/2015.
 */
var reportApp = angular.module('reportApp')

reportApp.controller('ReportCtrl', function($scope, $uibModal, localStorageService) {
    $scope.users = {
        names: ['Spark', 'Feng', 'Marlon', 'Felix', 'Waikei', 'Kane', 'Hyman', 'Sky', 'Melody', 'Alex', 'Weber']
    }
    console.log(localStorageService.get('kitties'));
    if(localStorageService.get('kitties') == null) {
        $scope.kitties = [];
        localStorageService.set('kitties', $scope.kitties);
    }else {
        $scope.kitties = localStorageService.get('kitties');
    }
    $scope.today = new Date();
    $scope.add = function(name) {
        //console.log($scope.kitties);
        var modalInstance = $uibModal.open({
            animation: false,
            templateUrl: 'partials/newReport.html',
            controller: 'NewReportCtrl',
            size: 'lg',
            resolve: {
                name: function() {
                    return name;
                }
            }
        });
        modalInstance.result.then(function (data) {
            $scope.kitties.push(data);
        }, function () {
            //$log.info('Modal dismissed at: ' + new Date());
        });
    }
});

reportApp.controller('NewReportCtrl', function($scope, $uibModalInstance, localStorageService, name) {
    $scope.name = name;
    $scope.today = new Date();
    $scope.tasks = [];

    $scope.isShown = false;
    $scope.buttonShown = true;
    $scope.showTask = function() {
        $scope.task = '';
        $scope.taskOps = {
            priorities: ['Critical', 'Major', 'Medium', 'Low'],
            jiraStatuses: ['Open', 'In Progress', 'Resolved', 'Closed'],
            statuses: ['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', 'Done']
        }
        $scope.isShown = true;
        $scope.buttonShown = false;
    }

    $scope.saveTask = function() {
        console.log($scope.task);
        $scope.tasks.push($scope.task);
        $scope.isShown = false;
        $scope.buttonShown = true;
    }

    $scope.showCase = function(task) {
        $scope.isShown = true;
        $scope.task = task;
        $scope.buttonShown = false;
    }
    $scope.addReport = function() {
        // write to json
        var date = new Date();
        var email = {
            spark: "spark.ou@misionsky.com",
            feng: "feng.xuan@missionsky.com",
            marlon: "marlon.xiang@missionsky.com",
            felix: "felix.huang@missionsky.com",
            waikei: "waikei.tan@missionsky.com",
            kane: "kane.tang@missionsky.com",
            hyman: "hyman.zhang@missionsky.com",
            sky: "sky.zhang@missionsky.com",
            melody: "melody.cai@missionsky.com",
            alex: "alex.li@missionsky.com",
            weber: "weber.yan@missionsky.com"
        }



        var kitty = {name: $scope.name}
        var kitties = localStorageService.get('kitties');
        //.push(kitty);
        kitties.push(kitty);
        //console.log(kitties);
        //console.log(a);
        localStorageService.set('kitties', kitties);
        $uibModalInstance.close(kitty);
    }
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});