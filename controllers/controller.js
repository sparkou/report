/**
 * Created by spark.ou on 12/29/2015.
 */
var reportApp = angular.module('reportApp')

reportApp.controller('ReportCtrl', function($scope, $uibModal) {

    $scope.kitties = [{name: 'spark', test: 'test'}, {name: 'marlon', test: 'test'}];

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
            //$scope.jobs.push(data);
        }, function () {
            //$log.info('Modal dismissed at: ' + new Date());
        });
    }
});

reportApp.controller('NewReportCtrl', function($scope,  $uibModalInstance) {

    $scope.users = [{name: 'Spark', email: 'spark.ou@missionsky.com'}, {name: 'Feng', email: 'feng.xuan@missionsky.com'}]


    $uibModalInstance.close();
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});