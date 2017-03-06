goog.provide('domain.AppConfig');

goog.require('goog.Uri');

domain.AppConfig = function() {
  var uri = goog.Uri.parse(window.location);
  var queryData = uri.getQueryData();
  this.widget = queryData.get('widget');
  this.hotelId = Number(queryData.get('hotel', 6));
  this.apikey = {params: {apikey: queryData.get('apikey', 'testtoken')}};
  this.reservationId = queryData.get('reservationId');
  this.showCart = queryData.get('showCart');
  this.room = queryData.get('room');
  this.last = queryData.get('last');
  this.facilityId = Number(queryData.get('facilityId', 24));
  this.serviceId = Number(queryData.get('serviceId', 11135));
  this.basePath = 'http://rapi.aliceapp.com/guest';
}

domain.AppConfig.prototype.hasReservationInfo = function() {
  return this.room && this.room != '' && this.last && this.last != '';
}