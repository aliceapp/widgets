/**
 * @fileoverview AUTOMATICALLY GENERATED service for API.Client.EventsapiApi.
 * Do not edit this file by hand or your changes will be lost next time it is
 * generated.
 *
 * This api allows clients to use Alice&#39;s guest functionality such as creating reservations and send requests to the hotel.
 * Version: 1.0.0
 * Generated at: 2016-03-29T13:24:53.887Z
 * Generated by: class io.swagger.codegen.languages.JavascriptClosureAngularClientCodegen
 */
/**
 * @license Aliceapp REST API public license
 * http://info.aliceapp.com
 */

goog.provide('API.Client.EventsapiApi');

goog.require('API.Client.Error');
goog.require('API.Client.EventsSubscription');

/**
 * @constructor
 * @param {!angular.$http} $http
 * @param {!Object} $httpParamSerializer
 * @param {!angular.$injector} $injector
 * @struct
 */
API.Client.EventsapiApi = function($http, $httpParamSerializer, $injector) {
  /** @private {!string} */
  this.basePath_ = $injector.has('EventsapiApiBasePath') ?
                   /** @type {!string} */ ($injector.get('EventsapiApiBasePath')) :
                   'http://rapi.aliceapp.com/';

  /** @private {!Object<string, string>} */
  this.defaultHeaders_ = $injector.has('EventsapiApiDefaultHeaders') ?
                   /** @type {!Object<string, string>} */ (
                       $injector.get('EventsapiApiDefaultHeaders')) :
                   {};

  /** @private {!angular.$http} */
  this.http_ = $http;

  /** @private {!Object} */
  this.httpParamSerializer_ = $injector.get('$httpParamSerializer');
}
API.Client.EventsapiApi.$inject = ['$http', '$httpParamSerializer', '$injector'];

/**
 * Subscribe on hotel events
 * General hotel events such as adding new services or updating existing. All events are of type AliceEvent
 * @param {!number} id Example: 6
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.EventsSubscription>}
 */
API.Client.EventsapiApi.prototype.subscribeHotelEventsUsingGET = function(id, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/v1/hotels/{id}/events'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling subscribeHotelEventsUsingGET');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
    
    
    params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return this.http_(httpRequestParams);
}

/**
 * Subscribe on reservation events
 * This subscriptions includes all events for hotel as well as events related to reservation. There is no need to subscribe also on hotel events. All events are of type AliceEvent
 * @param {!number} hotelId Example: 6
 * @param {!string} uuid Exapmle: 805830df-a550-46c0-85fc-2256f8d5a55f
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.EventsSubscription>}
 */
API.Client.EventsapiApi.prototype.subscribeReservationEventsUsingGET = function(hotelId, uuid, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/v1/hotels/{hotelId}/reservations/{uuid}/events'
      .replace('{' + 'hotelId' + '}', String(hotelId))
      .replace('{' + 'uuid' + '}', String(uuid));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders);
  // verify required parameter 'hotelId' is set
  if (!hotelId) {
    throw new Error('Missing required parameter hotelId when calling subscribeReservationEventsUsingGET');
  }
  // verify required parameter 'uuid' is set
  if (!uuid) {
    throw new Error('Missing required parameter uuid when calling subscribeReservationEventsUsingGET');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
    
    
    params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return this.http_(httpRequestParams);
}