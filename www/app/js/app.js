var appConfig = new domain.AppConfig();

angular.module('guest', ['ionic', 'guest.services', 'guest.controllers'])

.constant('appConfig', appConfig)
.constant('HotelapiApiBasePath', appConfig.basePath)
.constant('ReservationapiApiBasePath', appConfig.basePath)
.constant('TicketapiApiBasePath', appConfig.basePath)
.constant('EventsapiApiBasePath', appConfig.basePath)
.constant('MessagingapiApiBasePath', appConfig.basePath)

.run(function($ionicPlatform, $rootScope) {
  $rootScope.widget = appConfig.widget;
  $rootScope.showCart = appConfig.showCart;
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })
    .state('app.facilities', {
      url: '/facilities',
      views: {
        'menuContent': {
          templateUrl: 'templates/facilities.html',
          controller: 'FacilitiesCtrl'
        }
      }
    })
    .state('app.facility', {
      url: '/facilities/:facilityId',
      views: {
        'menuContent': {
          templateUrl: 'templates/facility.html',
          controller: 'FacilityCtrl'
        }
      }
    })
    .state('app.service', {
      url: '/facilities/:facilityId/services/:serviceId',
      views: {
        'menuContent': {
          templateUrl: 'templates/service.html',
          controller: 'ServiceRequestCtrl'
        }
      }
    })
    .state('app.menu', {
      url: '/facilities/:facilityId/menus/:menuId',
      views: {
        'menuContent': {
          templateUrl: 'templates/menuItems.html',
          controller: 'MenuCtrl'
        }
      }
    })
    .state('app.item', {
      url: '/facilities/:facilityId/menus/:menuId/items/:itemId',
      views: {
        'menuContent': {
          templateUrl: 'templates/item.html',
          controller: 'MenuOrderCtrl'
        }
      }
    })
    .state('app.cart', {
      url: '/cart',
      views: {
        'menuContent': {
          templateUrl: 'templates/cart.html',
          controller: 'CartCtrl'
        }
      }
    });
  $urlRouterProvider.otherwise('/app/facilities');
});
