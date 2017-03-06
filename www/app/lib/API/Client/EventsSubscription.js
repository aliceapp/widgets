goog.provide('API.Client.EventsSubscription');

/**
 * @record
 */
API.Client.EventsSubscription = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.EventsSubscription.prototype.longPollingUrl;

/**
 * @type {!string}
 * @export
 */
API.Client.EventsSubscription.prototype.websocketUrl;

