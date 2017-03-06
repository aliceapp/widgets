var chatControllers = angular.module('chat.controllers', []);
chatControllers.controller('ChatAppCtrl', ['$scope', '$ionicModal', 'appConfig','hotelService', 'securityService', controller.ChatAppController]);
chatControllers.controller('StartChatCtrl', ['$scope', '$state', 'chatService', 'securityService', controller.StartChatController]);
chatControllers.controller('ChatCtrl', ['$scope', 'chatService', 'securityService', controller.ChatController]);