var appConfig = new domain.AppConfig();

angular.module('chat', ['ionic', 'chat.services', 'chat.controllers'])

.constant('appConfig', appConfig)
.constant('HotelapiApiBasePath', appConfig.basePath)
.constant('ReservationapiApiBasePath', appConfig.basePath)
.constant('TicketapiApiBasePath', appConfig.basePath)
.constant('EventsapiApiBasePath', appConfig.basePath)
.constant('MessagingapiApiBasePath', appConfig.basePath)

.run(function($ionicPlatform, $rootScope) {
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

.config(function($stateProvider, $urlRouterProvider, appConfig) {
  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/chatMenu.html',
      controller: 'ChatAppCtrl'
    })
    .state('app.start', {
      url: '/start',
      views: {
        'menuContent': {
          templateUrl: 'templates/startChat.html',
          controller: 'StartChatCtrl'
        }
      }
    })
    .state('app.chat', {
      url: '/chat',
      views: {
        'menuContent': {
          templateUrl: 'templates/chat.html',
          controller: 'ChatCtrl'
        }
      }
    });
  if (appConfig.hasReservationInfo()) {
    $urlRouterProvider.otherwise('/app/chat');
  } else {
    $urlRouterProvider.otherwise('/app/start');
  }
});
