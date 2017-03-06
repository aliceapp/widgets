goog.provide('API.Client.ServiceRequestRequest');

/**
 * @record
 */
API.Client.ServiceRequestRequest = function() {}

/**
 * Arbitary info regarding the order
 * @type {!string}
 * @export
 */
API.Client.ServiceRequestRequest.prototype.info;

/**
 * @type {!string}
 * @export
 */
API.Client.ServiceRequestRequest.prototype.lang;

/**
 * List of options
 * @type {!Array<!API.Client.Option>}
 * @export
 */
API.Client.ServiceRequestRequest.prototype.options;

/**
 * id of the service from hotel info
 * @type {!number}
 * @export
 */
API.Client.ServiceRequestRequest.prototype.serviceId;

