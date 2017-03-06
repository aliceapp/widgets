goog.provide('API.Client.MenuOrderRequest');

/**
 * @record
 */
API.Client.MenuOrderRequest = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.MenuOrderRequest.prototype.deliveryDateType;

/**
 * @type {!string}
 * @export
 */
API.Client.MenuOrderRequest.prototype.deliveryTime;

/**
 * Arbitary info regarding the order
 * @type {!string}
 * @export
 */
API.Client.MenuOrderRequest.prototype.info;

/**
 * @type {!Array<!API.Client.MenuOrderItem>}
 * @export
 */
API.Client.MenuOrderRequest.prototype.items;

/**
 * @type {!string}
 * @export
 */
API.Client.MenuOrderRequest.prototype.lang;

/**
 * menu identifier from hotel description
 * @type {!number}
 * @export
 */
API.Client.MenuOrderRequest.prototype.menuId;

