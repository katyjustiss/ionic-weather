angular.module('weather.settings', [])

  .controller('SettingsCtrl', function (settings, $scope, $ionicLoading) {
    $scope.scale = settings.scale;
    $scope.precision = settings.precision;

    $scope.$watch('precision', function () {
      settings.precision = $scope.precision;
    });

    $scope.$watch('scale', function () {
      if ($scope.scale === 'X') {
        $ionicLoading.show({
          template: '<img src="img/whatshappening.gif">',
          duration: 5000
        });
      }

      settings.scale = $scope.scale;
    });

  })

  .factory('settings', function () {
    return {
      get scale() {
        return localStorage.getItem('scale') || 'K';
      },
      get precision() {
        return localStorage.getItem('precision') || '2';
      },
      set scale(s) {
        localStorage.setItem('scale', s);
      },
      set precision(p) {
        localStorage.setItem('precision', p);
      }
    };
  })

  .factory('location', function() {
    return {
      get favorites() {
        var json = localStorage.getItem('favorites')
        return JSON.parse(json)
      },
      set favorites(f) {
        var data = JSON.stringify(f);
        localStorage.setItem('favorites', f)
      },
      addFavorite: function(f) {
        var favorites = this.favorites.concat(f);
        // var json = localStorage.getItem('favorites');
        // var favorites = JSON.parse(json);
        // favorites.push(f);
        // var data = JSON.stringify(favorites)
        // localStorage.setItem('favorites', addedJson)
      },
      removeFavorite: function(city) {
        var remove = localStorage.getItem('city')
        var x = removeItem('city')
      }
    };
  });
