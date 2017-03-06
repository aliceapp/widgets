goog.provide("service.ChatService");

service.ChatService = function(appConfig, messagingService, subscriptionService, ticketService) {
  this.messagingService = messagingService;
  this.subscriptionService = subscriptionService;
  this.appConfig = appConfig;
  this.ticketService = ticketService;
  this.chat = [];
}

service.ChatService.prototype.send = function(text) {
  var chatService = this;
  this.chat.push({incoming:false, text: text});
  this.ticketService.createServiceRequest({serviceId: this.appConfig.serviceId, options: []}).then(function(response) {
    chatService.ticketId = response.data.id;
    chatService.messagingService.sendMessage(chatService.ticketId, text);
    chatService.subscriptionService.subscribeOnMessagesForTicket(chatService.ticketId, function(text) {
      chatService.chat.push({incoming: true, text: text});
    });
    chatService.send = function(text) {
      chatService.chat.push({incoming:false, text: text});
      chatService.messagingService.sendMessage(chatService.ticketId, text);
    }
  })
}
