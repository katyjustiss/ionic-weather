angular.module('weather.search', [])
  .controller('SearchCtrl', function($scope, $http) {
    //randomly queryChange and query were on different scopes. Had to target the parent scope.
    $scope.queryChanged = _.debounce(function() {
      $http
        .get('https://maps.googleapis.com/maps/api/geocode/json', {
          params: { address: $scope.query}
        })
        .success(function (data) {
          $scope.locations = data.results;
        });
      }, 2000);

    // $scope.getWeather = function() {

    //   $http
    //     .get()
    //     .success(function (res) {
    //       $scope.weather = res;
    //     })
    // }

  });
