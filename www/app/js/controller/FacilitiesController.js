goog.provide('controller.FacilitiesController');

controller.FacilitiesController = function($scope, hotelService) {
  hotelService.loadFacilities().then(function(response) {
    $scope.facilities = response.data;
  });
}