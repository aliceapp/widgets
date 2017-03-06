goog.provide('controller.MenuController');

controller.MenuController = function($scope, $stateParams, hotelService) {
  hotelService.loadMenu($stateParams.facilityId, $stateParams.menuId).then(function(response) {
    $scope.menu = response.data;
  })
  $scope.facility = {id: $stateParams.facilityId};
  hotelService.loadMenuItems($stateParams.facilityId, $stateParams.menuId).then(function(response) {
    $scope.items = response.data;
  })
}