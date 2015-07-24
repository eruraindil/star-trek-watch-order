var app = angular.module('myApp', []);

app.controller('appController', function($scope, $http) {
  $scope.loading = true;
  $http.get('episodes.json').then(function(res){
    $scope.episodes = res.data;
  })
  .finally(function () {
    // Hide loading spinner whether our call succeeded or failed.
    $scope.loading = false;
  });

  $http.get('references.json').then(function(res){
    $scope.references = res.data;
  });

});

app.filter('urlFormat', function() {
  return function(input) {
    input = input.replace(/\s/g, "+");
    return input;
  };
})
.filter('urlListFormat', function() {
  return function(input) {
    var output = "";
    var array = input.split(",");
    array.forEach(function(item) {
      output += "<a target='_blank' class='btn btn-xs btn-info' href=\"https://www.google.ca/search?q=" + item.replace(/\s/g, "+") + "+writer\">" + item + "</a> ";
    });
    return output;
  };
})
.filter('unsafe', function($sce) {
  return function(val) {
    return $sce.trustAsHtml(val);
  };
})
.filter('colour', function() {
  return function(series) {
    var out;
    switch(series) {
      case "ENT":
        out = "info";
        break;
      case "TOS":
        out = "warning";
        break;
      case "TNG":
        out = "success";
        break;
      case "DS9":
        out = "danger";
        break;
      case "VOY":
        out = "default";
        break;
      case "MOV":
        out = "primary";
    }
    return out;
  };
});
