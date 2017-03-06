goog.provide('controller.MenuOrderController');

controller.MenuOrderController = function($scope, $stateParams, $ionicPopup, hotelService, cartService, securityService) {
  hotelService.loadMenuItem($stateParams.facilityId, $stateParams.menuId, $stateParams.itemId).then(function(response) {
    $scope.item = response.data;
  });
  hotelService.loadMenuItemOptions($stateParams.facilityId, $stateParams.menuId, $stateParams.itemId).then(function(response) {
    $scope.options = response.data;
  });
  $scope.menuOrderForm = {};
  
  function iterateOverOptions(form, callback) {
    for (var property in form) {
      if (form.hasOwnProperty(property) && property.indexOf('option') > -1) {
        callback(Number(property.replace('option', '')), form[property])
      }
    }
  }
  
  $scope.getTotal = function() {
    if (!$scope.item) {
      return 0;
    }
    var price = $scope.item.price;
    iterateOverOptions($scope.menuOrderForm, function(id, value) {
      if (value.price) {
        price += value.price;
      }
    })
    if ($scope.menuOrderForm.quantity) {
      return price * $scope.menuOrderForm.quantity;
    }
    return 0;
  }
  
  $scope.addToCart = function() {
    var form = {};
    form.menuId = $stateParams.menuId;
    form.itemId = $stateParams.itemId;
    form.itemName = $scope.item.name;
    if ($scope.item.price) {
      form.price = $scope.item.price;
    }
    form.quantity = Number($scope.menuOrderForm.quantity);
    iterateOverOptions($scope.menuOrderForm, function(id, value) {
      if (form.options == null) {
        form.options = [];
      }
      var optionValue = value;
      if (optionValue.id) {
        optionValue = optionValue.id;
      }
      var option = {id: id, value: optionValue};
      if (value.name) {
        option.name = value.name;
      }
      form.options.push(option);
    })
    cartService.add(form);
    $scope.menuOrderForm = {}; 
  }
}