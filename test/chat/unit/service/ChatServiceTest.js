describe('ChatService', function() {
  var service, messagingServiceMock, subscriptionServiceMock, ticketServiceMock, appConfig, deferredCreateTicket;
  var serviceId = 1234;
  
  beforeEach(module('chat'));
  
  beforeEach(module(function($provide, $urlRouterProvider) {  
    $provide.value('$ionicTemplateCache', function(){} );
    $urlRouterProvider.deferIntercept();
  }));
  
  beforeEach(inject(function(chatService, $q) {
    deferredCreateTicket = $q.defer();
    ticketServiceMock = {
        createServiceRequest: jasmine.createSpy('create service request spy')
          .and.returnValue(deferredCreateTicket.promise),
    }
    securityServiceMock = {
        secure: function(f) {
          return function() {
            f.call();
          }
        }
    };
    subscriptionServiceMock = {};
    messagingServiceMock = {
        sendMessage: jasmine.createSpy('message spy')
    };
    service = chatService;
    service.subscriptionService = subscriptionServiceMock;
    service.messagingService = messagingServiceMock;
    service.securityService = securityServiceMock;
    service.appConfig = {serviceId: serviceId};
    service.ticketService = ticketServiceMock;
  }))
  
  it('send', inject(function($rootScope){
    expect(service.chat).toEqual([]);
    var savedCallback;
    subscriptionServiceMock.subscribeOnMessagesForTicket = function(ticketId, callback) {
      expect(ticketId).toEqual(666);
      callback('test message');
      savedCallback = callback;
    }
    deferredCreateTicket.resolve({data: {id: 666}});

    service.send("first message");
    $rootScope.$digest();
    
    expect(service.chat).toEqual([{incoming: false, text: 'first message'}, {incoming: true, text: 'test message'}]);
    expect(messagingServiceMock.sendMessage).toHaveBeenCalledWith(666, 'first message');
 
    savedCallback('second message');
    
    expect(service.chat).toEqual([{incoming: false, text: 'first message'}, {incoming: true, text: 'test message'}, {incoming: true, text: 'second message'}]);
    
    service.send("third message");
    
    expect(messagingServiceMock.sendMessage).toHaveBeenCalledWith(666, 'third message');
    expect(service.chat).toEqual([{incoming: false, text: 'first message'}, {incoming: true, text: 'test message'}, {incoming: true, text: 'second message'}, {incoming: false, text: 'third message'}]);
  }));
})