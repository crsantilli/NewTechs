var app = angular.module('app', ['ui.grid']);

app.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.showMe = function () {
        //$scope.gridOptions.data = $scope.firstData;        
    };

    $scope.gridOptions = {};
    $scope.gridOptions.columnDefs = [
         { name: 'name' },
         { name: 'gender' },
         {
             name: 'ShowScope',
             cellTemplate: '<button class="btn primary" ng-click="grid.appScope.showMe()">Click Me</button>'
         }
    ];

    $scope.gridOptions.onRegisterApi = function (gridApi) {
        //set gridApi on scope
        $scope.gridApi = gridApi;
        $scope.gridApi.core.on.sortChanged($scope, function (grid, sortColumns) { while (sortColumns.length > 1) { sortColumns[0].unsort(); sortColumns.shift(); } });
    };

    $http.get('http://ui-grid.info/data/100.json')
      .success(function (data) {
          $scope.gridOptions.data = data;
      });
}]);