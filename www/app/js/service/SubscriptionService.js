goog.provide("service.SubscriptionService");

service.SubscriptionService = function($http, eventsService) {
  this.http = $http;
  this.eventsService = eventsService;
}

service.SubscriptionService.prototype.subscribeOnMessagesForTicket = function(ticketId, callback) {
  var subscriptionService = this;
  var successCallback = function(response) {
    if (response.data.type == 'TicketComment' && response.data.ticket == ticketId) {
      try {
        callback(response.data.text);
      } catch(e) {
      }
    }
    subscriptionService.http.get(subscriptionService.url).then(successCallback, failCallback);
  }
  var failCallback = function(response) {
    subscriptionService.http.get(subscriptionService.url).then(successCallback, failCallback);
  }
  
  this.eventsService.subscribe().then(function(response) {
    subscriptionService.url = response.data.longPollingUrl;
    subscriptionService.http.get(subscriptionService.url).then(successCallback, failCallback);
  });
}