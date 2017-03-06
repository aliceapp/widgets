goog.provide("service.LoginService");

goog.require('API.Client.ReservationapiApi');

service.LoginService = function($http, $httpParamSerializer, $injector, appConfig) {
  this._appConfig = appConfig;
  this._client = new API.Client.ReservationapiApi($http, $httpParamSerializer, $injector);
}

service.LoginService.prototype.login = function(form) {
  return this._client.reservationUsingPOST(this._appConfig.hotelId, form, this._appConfig.apikey);
}