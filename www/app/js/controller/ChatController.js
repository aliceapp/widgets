goog.provide('controller.ChatController');

controller.ChatController = function($scope, chatService, securityService) {
  $scope.chatService = chatService;
  $scope.messageForm = {};
  
  $scope.sendMessage = securityService.secure(function sendInitialized() {
    chatService.send($scope.messageForm.text);
    $scope.messageForm = {};
  });
}