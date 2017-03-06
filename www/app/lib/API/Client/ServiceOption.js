goog.provide('API.Client.ServiceOption');

/**
 * @record
 */
API.Client.ServiceOption = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.ServiceOption.prototype.dataType;

/**
 * @type {!string}
 * @export
 */
API.Client.ServiceOption.prototype.group;

/**
 * @type {!number}
 * @export
 */
API.Client.ServiceOption.prototype.id;

/**
 * @type {!string}
 * @export
 */
API.Client.ServiceOption.prototype.name;

/**
 * @type {!boolean}
 * @export
 */
API.Client.ServiceOption.prototype.required;

/**
 * @type {!Array<!string>}
 * @export
 */
API.Client.ServiceOption.prototype.values;

/** @enum {string} */
API.Client.ServiceOption.DataTypeEnum = { 
  Text: 'Text',
  Number: 'Number',
  Check: 'Check',
  SelectOne: 'SelectOne',
  SelectMulti: 'SelectMulti',
  Date: 'Date',
  Time: 'Time',
  DateTime: 'DateTime',
  SelectOneSub: 'SelectOneSub',
  SelectMultiSub: 'SelectMultiSub',
  Contact: 'Contact',
  Info: 'Info',
}
