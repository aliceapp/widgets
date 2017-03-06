goog.provide('API.Client.AliceEvent');

/**
 * @record
 */
API.Client.AliceEvent = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.AliceEvent.prototype.author;

/**
 * Unique id of the event
 * @type {!number}
 * @export
 */
API.Client.AliceEvent.prototype.id;

/**
 * @type {!string}
 * @export
 */
API.Client.AliceEvent.prototype.text;

/**
 * Ticket id
 * @type {!number}
 * @export
 */
API.Client.AliceEvent.prototype.ticket;

/**
 * Ticket status
 * @type {!string}
 * @export
 */
API.Client.AliceEvent.prototype.ticketStatus;

/**
 * Ticket type
 * @type {!string}
 * @export
 */
API.Client.AliceEvent.prototype.ticketType;

/**
 * @type {!number}
 * @export
 */
API.Client.AliceEvent.prototype.time;

/**
 * Type of the event
 * @type {!string}
 * @export
 */
API.Client.AliceEvent.prototype.type;

/** @enum {string} */
API.Client.AliceEvent.TicketStatusEnum = { 
  New: 'New',
  Processing: 'Processing',
  Transferred: 'Transferred',
  Approved: 'Approved',
  InProgress: 'InProgress',
  Rejected: 'Rejected',
  Finished: 'Finished',
  Expired: 'Expired',
}
/** @enum {string} */
API.Client.AliceEvent.TicketTypeEnum = { 
  MenuOrder: 'MenuOrder',
  ServiceRequest: 'ServiceRequest',
  ReservationRequest: 'ReservationRequest',
}
/** @enum {string} */
API.Client.AliceEvent.TypeEnum = { 
  TicketComment: 'TicketComment',
  RequestUpdate: 'RequestUpdate',
  HotelUpdate: 'HotelUpdate',
  GuestRequestCreatedByStaff: 'GuestRequestCreatedByStaff',
}
