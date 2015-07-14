angular.module('weather.weather', [])

  .controller('WeatherCtrl', function($scope, $stateParams, $http){
    $scope.city = $stateParams.city;

    $http
      .get('/api/forecast/' + $stateParams.lat + ',' + $stateParams.long)
      .success(function(data) {
        console.log(data)
      });

  });
