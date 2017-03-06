goog.provide('controller.ChatAppController');

controller.ChatAppController = function($scope, $ionicModal, appConfig, hotelService, securityService) {
  hotelService.loadService(appConfig.facilityId, appConfig.serviceId).then(function(response) {
    $scope.service = response.data;
  });
  $scope.messageForm = {};
  
  securityService.initLogin($scope, $ionicModal);
}