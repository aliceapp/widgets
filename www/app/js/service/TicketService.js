goog.provide("service.TicketService");

goog.require('API.Client.TicketapiApi');

service.TicketService = function($http, $httpParamSerializer, $injector, appConfig, securityService) {
  this._appConfig = appConfig;
  this._client = new API.Client.TicketapiApi($http, $httpParamSerializer, $injector);
  this._securityService = securityService;
}

service.TicketService.prototype.createServiceRequest = function(request) {
  return this._client.serviceRequestCreateUsingPOST(this._appConfig.hotelId, this._securityService.currentUser.uuid, request, this._appConfig.apikey);
}

service.TicketService.prototype.createMenuOrder = function(request) {
  return this._client.menuOrderCreateUsingPOST(this._appConfig.hotelId, this._securityService.currentUser.uuid, request, this._appConfig.apikey);
}