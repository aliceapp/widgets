goog.provide('API.Client.HotelFull');

/**
 * @record
 */
API.Client.HotelFull = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.HotelFull.prototype.address;

/**
 * @type {!string}
 * @export
 */
API.Client.HotelFull.prototype.checkoutTime;

/**
 * Full city name
 * @type {!string}
 * @export
 */
API.Client.HotelFull.prototype.city;

/**
 * @type {!string}
 * @export
 */
API.Client.HotelFull.prototype.contact;

/**
 * @type {!API.Client.Coordinates}
 * @export
 */
API.Client.HotelFull.prototype.coordinates;

/**
 * ISO Currency code
 * @type {!string}
 * @export
 */
API.Client.HotelFull.prototype.currency;

/**
 * @type {!Array<!API.Client.FacilityFull>}
 * @export
 */
API.Client.HotelFull.prototype.facilities;

/**
 * @type {!number}
 * @export
 */
API.Client.HotelFull.prototype.id;

/**
 * @type {!string}
 * @export
 */
API.Client.HotelFull.prototype.imageUrl;

/**
 * @type {!string}
 * @export
 */
API.Client.HotelFull.prototype.information;

/**
 * @type {!string}
 * @export
 */
API.Client.HotelFull.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.HotelFull.prototype.phone;

/**
 * Number of rooms in the hotel
 * @type {!string}
 * @export
 */
API.Client.HotelFull.prototype.rooms;

/**
 * Timezone offset in seconds
 * @type {!number}
 * @export
 */
API.Client.HotelFull.prototype.timeZone;

