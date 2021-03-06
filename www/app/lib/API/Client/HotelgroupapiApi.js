/**
 * @fileoverview AUTOMATICALLY GENERATED service for API.Client.HotelgroupapiApi.
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

goog.provide('API.Client.HotelgroupapiApi');

goog.require('API.Client.Error');
goog.require('API.Client.Hotel');
goog.require('API.Client.HotelGroup');

/**
 * @constructor
 * @param {!angular.$http} $http
 * @param {!Object} $httpParamSerializer
 * @param {!angular.$injector} $injector
 * @struct
 */
API.Client.HotelgroupapiApi = function($http, $httpParamSerializer, $injector) {
  /** @private {!string} */
  this.basePath_ = $injector.has('HotelgroupapiApiBasePath') ?
                   /** @type {!string} */ ($injector.get('HotelgroupapiApiBasePath')) :
                   'http://rapi.aliceapp.com/';

  /** @private {!Object<string, string>} */
  this.defaultHeaders_ = $injector.has('HotelgroupapiApiDefaultHeaders') ?
                   /** @type {!Object<string, string>} */ (
                       $injector.get('HotelgroupapiApiDefaultHeaders')) :
                   {};

  /** @private {!angular.$http} */
  this.http_ = $http;

  /** @private {!Object} */
  this.httpParamSerializer_ = $injector.get('$httpParamSerializer');
}
API.Client.HotelgroupapiApi.$inject = ['$http', '$httpParamSerializer', '$injector'];

/**
 * hotelGroupHotels
 * 
 * @param {!number} id Example: 2
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!Array<!API.Client.Hotel>>}
 */
API.Client.HotelgroupapiApi.prototype.hotelGroupHotelsUsingGET = function(id, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/v1/hotelGroups/{id}/hotels'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling hotelGroupHotelsUsingGET');
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
 * hotelGroup
 * 
 * @param {!number} id Example: 2
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.HotelGroup>}
 */
API.Client.HotelgroupapiApi.prototype.hotelGroupUsingGET = function(id, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/v1/hotelGroups/{id}'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling hotelGroupUsingGET');
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
