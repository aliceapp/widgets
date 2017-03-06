var guestServices = angular.module('guest.services', []);
guestServices.service("hotelService", ['$http', '$httpParamSerializer', '$injector', 'appConfig', service.HotelService]);
guestServices.service("loginService", ['$http', '$httpParamSerializer', '$injector', 'appConfig', service.LoginService]);
guestServices.service("securityService",['appConfig', 'loginService', service.SecurityService]);
guestServices.service("ticketService", ['$http', '$httpParamSerializer', '$injector', 'appConfig', 'securityService', service.TicketService]);
guestServices.service("cartService", ['ticketService', '$q', service.CartService]);