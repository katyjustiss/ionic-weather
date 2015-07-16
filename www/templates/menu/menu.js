angular.module('weather.menu', [])

.controller('MenuCtrl', function($scope, location) {

  $scope.favorites = location.favorites;

})
