goog.provide('controller.ServiceRequestController');

controller.ServiceRequestController = function($scope, $stateParams, $ionicPopup, hotelService, securityService, ticketService) {
  hotelService.loadService($stateParams.facilityId, $stateParams.serviceId).then(function(response) {
    $scope.service = response.data;
  });
  hotelService.loadServiceOptions($stateParams.facilityId, $stateParams.serviceId).then(function(response) {
    $scope.options = response.data;
  });
  $scope.serviceRequestForm = {};
  
  $scope.sendServiceRequest = securityService.secure(function() {
    var request = {serviceId: $stateParams.serviceId, options: []};
    var form = $scope.serviceRequestForm;
    request.info = form.info;
    for (var property in form) {
      if (form.hasOwnProperty(property) && property != 'info') {
        request.options.push({id: Number(property.replace('option', '')), value: form[property]});
      }
    }
    ticketService.createServiceRequest(request).then(function(response) {
      $scope.serviceRequestForm = {};
      $ionicPopup.alert({
        title: 'Success',
        template: 'Service request created successfully!'
      });
    });
  })
}