angular.module('weather.weather', [])

  .controller('WeatherCtrl', function(weather, settings, $scope, $stateParams, $ionicLoading){
    $scope.city = $stateParams.city;
    $scope.scale = settings.scale;
    $scope.precision = settings.precision;

    $ionicLoading.show();

    weather
      .getWeather($stateParams.lat, $stateParams.long)
      .success(function (data) {
        setTimeout(function () {
          $scope.weather = data.currently;
          $ionicLoading.hide();
        }, 1000);
      });
  })

  .factory('weather', function (settings, $http) {
    var API_URL = '/api/forecast/';
    var SI_PARAM = 'units=si';

    return {
      getWeather: function (lat, long) {
        var url = API_URL + lat + ',' + long + '?units=';

        if (settings.scale === 'C') {
          url += 'si';
        } else {
          url += 'us';
        }

        return $http.get(url)
      }
    };
  });
