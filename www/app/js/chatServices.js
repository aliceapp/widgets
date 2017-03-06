var chatServices = angular.module('chat.services', []);
chatServices.service("hotelService", ['$http', '$httpParamSerializer', '$injector', 'appConfig', service.HotelService]);
chatServices.service("securityService",['appConfig', 'loginService', service.SecurityService]);
chatServices.service("loginService", ['$http', '$httpParamSerializer', '$injector', 'appConfig', service.LoginService]);
chatServices.service("ticketService", ['$http', '$httpParamSerializer', '$injector', 'appConfig', 'securityService', service.TicketService]);
chatServices.service("messagingService", ['$http', '$httpParamSerializer', '$injector', 'appConfig', 'securityService', service.MessagingService]);
chatServices.service("eventsService", ['$http', '$httpParamSerializer', '$injector', 'appConfig', 'securityService', service.EventsService]);
chatServices.service("subscriptionService", ['$http', 'eventsService', service.SubscriptionService]);
chatServices.service("chatService", ['appConfig', 'messagingService', 'subscriptionService', 'ticketService',  service.ChatService]);