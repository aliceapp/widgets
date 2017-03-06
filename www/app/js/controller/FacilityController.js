goog.provide('controller.FacilityController');

controller.FacilityController = function($scope, $stateParams, hotelService) {
  hotelService.loadFacility($stateParams.facilityId).then(function(response) {
    $scope.facility = response.data;
  });
  hotelService.loadMenus($stateParams.facilityId).then(function(response) {
    $scope.menus = response.data;
  });
  hotelService.loadServices($stateParams.facilityId).then(function(response) {
    $scope.services = response.data;
  });
}