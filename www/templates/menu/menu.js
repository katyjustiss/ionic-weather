angular.module('weather.menu', [])

.controller('MenuCtrl', function(location, $stateParams, $state, $scope, $rootScope) {
  $scope.params = $stateParams;
  $scope.favorites = location.favorites;

  $rootScope.$on('menuItemChanged', function(event, message) {
    $scope.favorites = location.favorites;
  })

  $scope.makeFavorite = function(obj) {
    location.addFavorite(obj);
    $rootScope.$emit('menuItemChanged'); //could pass messages in second argument.
  }

})
