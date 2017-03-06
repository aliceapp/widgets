goog.provide("service.HotelService");

goog.require('API.Client.HotelapiApi');

service.HotelService = function($http, $httpParamSerializer, $injector, appConfig) {
  this._appConfig = appConfig;
  this._client = new API.Client.HotelapiApi($http, $httpParamSerializer, $injector);
}

service.HotelService.prototype.loadFacilities = function() {
  return this._client.facilitiesUsingGET(this._appConfig.hotelId, this._appConfig.apikey);
}

service.HotelService.prototype.loadServices = function(facilityId) {
  return this._client.servicesUsingGET(this._appConfig.hotelId, facilityId, this._appConfig.apikey);
}

service.HotelService.prototype.loadMenus = function(facilityId) {
  return this._client.menusUsingGET(this._appConfig.hotelId, facilityId, this._appConfig.apikey);
}

service.HotelService.prototype.loadFacility = function(facilityId) {
  return this._client.facilityUsingGET(this._appConfig.hotelId, facilityId, this._appConfig.apikey);
}

service.HotelService.prototype.loadService = function(facilityId, serviceId) {
  return this._client.serviceUsingGET(this._appConfig.hotelId, facilityId, serviceId, this._appConfig.apikey);
}

service.HotelService.prototype.loadServiceOptions = function(facilityId, serviceId) {
  return this._client.serviceOptionsUsingGET(this._appConfig.hotelId, facilityId, serviceId, this._appConfig.apikey);
}

service.HotelService.prototype.loadMenuItems = function(facilityId, menuId) {
  return this._client.itemsUsingGET(this._appConfig.hotelId, facilityId, menuId, this._appConfig.apikey);
}

service.HotelService.prototype.loadMenu = function(facilityId, menuId) {
  return this._client.menuUsingGET(this._appConfig.hotelId, facilityId, menuId, this._appConfig.apikey);
}

service.HotelService.prototype.loadMenuItem = function(facilityId, menuId, itemId) {
  return this._client.itemUsingGET(this._appConfig.hotelId, facilityId, menuId, itemId, this._appConfig.apikey);
}

service.HotelService.prototype.loadMenuItemOptions = function(facilityId, menuId, itemId) {
  return this._client.itemOptionsUsingGET(this._appConfig.hotelId, facilityId, menuId, itemId, this._appConfig.apikey);
}