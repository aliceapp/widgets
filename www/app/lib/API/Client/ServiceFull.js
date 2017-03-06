goog.provide('API.Client.ServiceFull');

/**
 * @record
 */
API.Client.ServiceFull = function() {}

/**
 * @type {!number}
 * @export
 */
API.Client.ServiceFull.prototype.id;

/**
 * @type {!string}
 * @export
 */
API.Client.ServiceFull.prototype.information;

/**
 * @type {!string}
 * @export
 */
API.Client.ServiceFull.prototype.name;

/**
 * @type {!Array<!API.Client.ServiceOption>}
 * @export
 */
API.Client.ServiceFull.prototype.options;

/**
 * @type {!number}
 * @export
 */
API.Client.ServiceFull.prototype.price;

