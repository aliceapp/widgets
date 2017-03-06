goog.provide('API.Client.ServiceRequest');

/**
 * @record
 */
API.Client.ServiceRequest = function() {}

/**
 * @type {!Date}
 * @export
 */
API.Client.ServiceRequest.prototype.dateCreated;

/**
 * @type {!number}
 * @export
 */
API.Client.ServiceRequest.prototype.facilityId;

/**
 * @type {!string}
 * @export
 */
API.Client.ServiceRequest.prototype.facilityName;

/**
 * @type {!number}
 * @export
 */
API.Client.ServiceRequest.prototype.id;

/**
 * @type {!string}
 * @export
 */
API.Client.ServiceRequest.prototype.info;

/**
 * @type {!Array<!API.Client.ServiceRequestOptionInfo>}
 * @export
 */
API.Client.ServiceRequest.prototype.options;

/**
 * @type {!number}
 * @export
 */
API.Client.ServiceRequest.prototype.serviceId;

/**
 * @type {!string}
 * @export
 */
API.Client.ServiceRequest.prototype.serviceName;

/**
 * @type {!string}
 * @export
 */
API.Client.ServiceRequest.prototype.status;

