/**
 * Created by spark.ou on 12/29/2015.
 */
var reportApp = angular.module('reportApp')

reportApp.controller('ReportCtrl', function($scope, $uibModal) {

    $scope.kitties = [];
    $scope.today = new Date();
    $scope.add = function() {
        //console.log($scope.kitties);
        var modalInstance = $uibModal.open({
            animation: false,
            templateUrl: 'partials/newReport.html',
            controller: 'NewReportCtrl',
            size: 'lg',
            resolve: {
                //type: function() {
                //    return type;
                //}
            }
        });
        modalInstance.result.then(function (data) {
            $scope.kitties.push(data);
        }, function () {
            //$log.info('Modal dismissed at: ' + new Date());
        });
    }
});

reportApp.controller('NewReportCtrl', function($scope,  $uibModalInstance) {
    $scope.today = new Date();
    $scope.users = {
        names: ['Spark', 'Feng', 'Marlon', 'Felix', 'Waikei', 'Kane', 'Hyman', 'Sky', 'Melody', 'Alex', 'Weber']
    }
    console.log($scope.users.name);
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
        $scope.tasks.push($scope.task);
        $scope.isShown = false;
        $scope.buttonShown = true;
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
        var kitty = {name: $scope.users.name}
        $uibModalInstance.close(kitty);
    }
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});