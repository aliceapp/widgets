goog.provide('controller.CartController');

controller.CartController = function($scope, $ionicPopup, securityService, cartService) {
  $scope.cartForm = {};
  $scope.placeOrder = securityService.secure(function() {
    if ($scope.cartForm.info) {
      cartService.setSpecialInfo($scope.cartForm.info);
    }
    if ($scope.cartForm.deliveryTime != null) {
      cartService.setDeliveryTime($scope.cartForm.deliveryTime);
    }
    cartService.placeOrder(function() {
      $ionicPopup.alert({
        title: 'Success',
        template: 'Order placed successfully!'
      });
    });
  }); 
}