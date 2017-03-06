goog.provide('API.Client.MenuItemOption');

/**
 * @record
 */
API.Client.MenuItemOption = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.MenuItemOption.prototype.dataType;

/**
 * @type {!number}
 * @export
 */
API.Client.MenuItemOption.prototype.id;

/**
 * @type {!string}
 * @export
 */
API.Client.MenuItemOption.prototype.name;

/**
 * @type {!Array<!API.Client.MenuItemOption>}
 * @export
 */
API.Client.MenuItemOption.prototype.options;

/**
 * @type {!number}
 * @export
 */
API.Client.MenuItemOption.prototype.price;

/**
 * @type {!boolean}
 * @export
 */
API.Client.MenuItemOption.prototype.required;

/**
 * @type {!Array<!string>}
 * @export
 */
API.Client.MenuItemOption.prototype.values;

