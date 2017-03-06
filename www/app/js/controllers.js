var guestControllers = angular.module('guest.controllers', []);
guestControllers.controller('AppCtrl', ['$scope', '$ionicModal', '$state', 'securityService', 'cartService', controller.AppController]);
guestControllers.controller('FacilitiesCtrl', ['$scope', 'hotelService', controller.FacilitiesController]);
guestControllers.controller('FacilityCtrl', ['$scope', '$stateParams', 'hotelService', controller.FacilityController]);
guestControllers.controller('ServiceRequestCtrl', ['$scope', '$stateParams', '$ionicPopup', 'hotelService', 'securityService', 'ticketService', controller.ServiceRequestController]);
guestControllers.controller('MenuCtrl', ['$scope', '$stateParams', 'hotelService', controller.MenuController]);
guestControllers.controller('CartCtrl', ['$scope', '$ionicPopup', 'securityService', 'cartService', controller.CartController]);
guestControllers.controller('MenuOrderCtrl', ['$scope', '$stateParams', '$ionicPopup', 'hotelService', 'cartService', 'securityService', controller.MenuOrderController]);