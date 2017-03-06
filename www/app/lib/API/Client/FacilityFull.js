goog.provide('API.Client.FacilityFull');

/**
 * @record
 */
API.Client.FacilityFull = function() {}

/**
 * @type {!Date}
 * @export
 */
API.Client.FacilityFull.prototype.endTime;

/**
 * @type {!string}
 * @export
 */
API.Client.FacilityFull.prototype.group;

/**
 * @type {!number}
 * @export
 */
API.Client.FacilityFull.prototype.id;

/**
 * @type {!string}
 * @export
 */
API.Client.FacilityFull.prototype.information;

/**
 * @type {!Array<!API.Client.MenuFull>}
 * @export
 */
API.Client.FacilityFull.prototype.menus;

/**
 * @type {!string}
 * @export
 */
API.Client.FacilityFull.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.FacilityFull.prototype.phone;

/**
 * @type {!Array<!API.Client.ServiceFull>}
 * @export
 */
API.Client.FacilityFull.prototype.services;

/**
 * @type {!Date}
 * @export
 */
API.Client.FacilityFull.prototype.startTime;

/**
 * @type {!string}
 * @export
 */
API.Client.FacilityFull.prototype.type;

/** @enum {string} */
API.Client.FacilityFull.TypeEnum = { 
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
