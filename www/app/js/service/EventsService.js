goog.provide("service.EventsService");

goog.require('API.Client.EventsapiApi');

service.EventsService = function($http, $httpParamSerializer, $injector, appConfig, securityService) {
  this._appConfig = appConfig;
  this._client = new API.Client.EventsapiApi($http, $httpParamSerializer, $injector);
  this._securityService = securityService;
}

service.EventsService.prototype.subscribe = function() {
  return this._client.subscribeReservationEventsUsingGET(this._appConfig.hotelId, this._securityService.currentUser.uuid, this._appConfig.apikey); 
} 