goog.provide('API.Client.MenuOrder');

/**
 * @record
 */
API.Client.MenuOrder = function() {}

/**
 * @type {!Date}
 * @export
 */
API.Client.MenuOrder.prototype.dateCreated;

/**
 * @type {!string}
 * @export
 */
API.Client.MenuOrder.prototype.deliveryDateType;

/**
 * @type {!string}
 * @export
 */
API.Client.MenuOrder.prototype.deliveryTime;

/**
 * @type {!number}
 * @export
 */
API.Client.MenuOrder.prototype.facilityId;

/**
 * @type {!string}
 * @export
 */
API.Client.MenuOrder.prototype.facilityName;

/**
 * @type {!number}
 * @export
 */
API.Client.MenuOrder.prototype.id;

/**
 * @type {!string}
 * @export
 */
API.Client.MenuOrder.prototype.info;

/**
 * @type {!Array<!API.Client.MenuItemInfo>}
 * @export
 */
API.Client.MenuOrder.prototype.items;

/**
 * @type {!number}
 * @export
 */
API.Client.MenuOrder.prototype.menuId;

/**
 * @type {!string}
 * @export
 */
API.Client.MenuOrder.prototype.menuName;

/**
 * @type {!string}
 * @export
 */
API.Client.MenuOrder.prototype.status;

/**
 * @type {!number}
 * @export
 */
API.Client.MenuOrder.prototype.totalPrice;

