goog.provide("service.MessagingService");

goog.require('API.Client.MessagingapiApi');

service.MessagingService = function($http, $httpParamSerializer, $injector, appConfig, securityService) {
  this._appConfig = appConfig;
  this._client = new API.Client.MessagingapiApi($http, $httpParamSerializer, $injector);
  this._securityService = securityService;
}

service.MessagingService.prototype.sendMessage = function(ticketId, text) {
  return this._client.ticketMessageCreateUsingPOST(this._appConfig.hotelId, this._securityService.currentUser.uuid, ticketId, {text: text}, this._appConfig.apikey);
}