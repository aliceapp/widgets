goog.provide('API.Client.GenericTicket');

/**
 * @record
 */
API.Client.GenericTicket = function() {}

/**
 * @type {!Date}
 * @export
 */
API.Client.GenericTicket.prototype.dateCreated;

/**
 * @type {!number}
 * @export
 */
API.Client.GenericTicket.prototype.facilityId;

/**
 * @type {!string}
 * @export
 */
API.Client.GenericTicket.prototype.facilityName;

/**
 * @type {!number}
 * @export
 */
API.Client.GenericTicket.prototype.id;

/**
 * @type {!string}
 * @export
 */
API.Client.GenericTicket.prototype.info;

/**
 * @type {!string}
 * @export
 */
API.Client.GenericTicket.prototype.status;

/**
 * @type {!string}
 * @export
 */
API.Client.GenericTicket.prototype.ticketType;

/** @enum {string} */
API.Client.GenericTicket.TicketTypeEnum = { 
  ServiceRequest: 'ServiceRequest',
  MenuOrder: 'MenuOrder',
}
