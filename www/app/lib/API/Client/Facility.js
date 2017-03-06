goog.provide('API.Client.Facility');

/**
 * @record
 */
API.Client.Facility = function() {}

/**
 * @type {!Date}
 * @export
 */
API.Client.Facility.prototype.endTime;

/**
 * @type {!string}
 * @export
 */
API.Client.Facility.prototype.group;

/**
 * @type {!number}
 * @export
 */
API.Client.Facility.prototype.id;

/**
 * @type {!string}
 * @export
 */
API.Client.Facility.prototype.information;

/**
 * @type {!string}
 * @export
 */
API.Client.Facility.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.Facility.prototype.phone;

/**
 * @type {!Date}
 * @export
 */
API.Client.Facility.prototype.startTime;

/**
 * @type {!string}
 * @export
 */
API.Client.Facility.prototype.type;

/** @enum {string} */
API.Client.Facility.TypeEnum = { 
  FrontDesk: 'FrontDesk',
  Housekeeping: 'Housekeeping',
  BellService: 'BellService',
  Valet: 'Valet',
  Spa: 'Spa',
  Restaurant: 'Restaurant',
  Reservations: 'Reservations',
  RoomService: 'RoomService',
  Concierge: 'Concierge',
  Health: 'Health',
  Maintenance: 'Maintenance',
}
