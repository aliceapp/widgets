goog.provide('API.Client.MenuItemInfo');

/**
 * @record
 */
API.Client.MenuItemInfo = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.MenuItemInfo.prototype.comment;

/**
 * @type {!string}
 * @export
 */
API.Client.MenuItemInfo.prototype.deliveryTime;

/**
 * @type {!number}
 * @export
 */
API.Client.MenuItemInfo.prototype.id;

/**
 * @type {!string}
 * @export
 */
API.Client.MenuItemInfo.prototype.name;

/**
 * @type {!Array<!API.Client.MenuItemOptionInfo>}
 * @export
 */
API.Client.MenuItemInfo.prototype.options;

/**
 * @type {!number}
 * @export
 */
API.Client.MenuItemInfo.prototype.price;

/**
 * @type {!number}
 * @export
 */
API.Client.MenuItemInfo.prototype.quantity;

/**
 * @type {!number}
 * @export
 */
API.Client.MenuItemInfo.prototype.totalPrice;

