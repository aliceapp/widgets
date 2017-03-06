goog.provide('API.Client.MenuOrderItem');

/**
 * @record
 */
API.Client.MenuOrderItem = function() {}

/**
 * Arbitary comment
 * @type {!string}
 * @export
 */
API.Client.MenuOrderItem.prototype.comment;

/**
 * @type {!string}
 * @export
 */
API.Client.MenuOrderItem.prototype.deliveryTime;

/**
 * id of menu item from hotel description
 * @type {!number}
 * @export
 */
API.Client.MenuOrderItem.prototype.id;

/**
 * @type {!Array<!API.Client.Option>}
 * @export
 */
API.Client.MenuOrderItem.prototype.options;

/**
 * Number of items
 * @type {!number}
 * @export
 */
API.Client.MenuOrderItem.prototype.quantity;

