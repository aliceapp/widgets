goog.provide('controller.StartChatController');

controller.StartChatController = function($scope, $state, chatService, securityService) {
  $scope.sendMessage = securityService.secure(function() {
    chatService.send($scope.messageForm.text);
    $state.go('app.chat');
  })
}