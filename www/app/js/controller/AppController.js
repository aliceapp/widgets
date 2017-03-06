goog.provide('controller.AppController');

controller.AppController = function($scope, $ionicModal, $state, securityService, cartService) {
  $scope.cartService = cartService;
  
  securityService.initLogin($scope, $ionicModal);
  
  $scope.goToCart = function() {
    $state.go('app.cart');
  }
}