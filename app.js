var app = angular.module('myApp', []);

app.controller('appController', function($scope, $http) {
  $http.get('episodes.json').then(function(res){
    $scope.episodes = res.data;
  });

  $scope.sort = {
    column: 'Chrono Order',
    descending: false
  };
  $scope.changeSorting = function(column) {
    var sort = $scope.sort;
    if (sort.column == column) {
        sort.descending = !sort.descending;
    } else {
        sort.column = column;
        sort.descending = false;
    }
  };
});
