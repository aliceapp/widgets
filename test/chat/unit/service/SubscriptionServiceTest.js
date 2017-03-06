describe('SubscriptionService', function() {
  var service, eventsServiceMock, httpMock, subscribeDeferred, messageSuccessDeferred, messageFailDeferred, notMessageDeferred, wrongTicketMessageDeferred, lastMessageDeferred;
  
  beforeEach(module('chat'));
  
  beforeEach(module(function($provide, $urlRouterProvider) {  
    $provide.value('$ionicTemplateCache', function(){} );
    $urlRouterProvider.deferIntercept();
  }));
  
  beforeEach(inject(function(subscriptionService, $q) {
    subscribeDeferred = $q.defer();
    messageSuccessDeferred = $q.defer();
    messageFailDeferred = $q.defer();
    notMessageDeferred = $q.defer();
    lastMessageDeferred = $q.defer();
    wrongTicketMessageDeferred = $q.defer();
    eventsServiceMock = {
        subscribe: jasmine.createSpy('subscribe spy').and.returnValues(subscribeDeferred.promise)
    };
    httpMock = {
        get: jasmine.createSpy('polling spy').and.returnValues(messageFailDeferred.promise, messageSuccessDeferred.promise, notMessageDeferred.promise, wrongTicketMessageDeferred.promise, lastMessageDeferred.promise)
    }
    service = subscriptionService;
    service.eventsService = eventsServiceMock;
    service.http = httpMock;
  }))
  
  it('subscribe', inject(function($rootScope){
    var ticketId = 1234;
    var callback = jasmine.createSpy('callback spy');
    subscribeDeferred.resolve({data: {longPollingUrl: 'longPollingUrl', websocketUrl: 'websocketUrl'}});
    
    service.subscribeOnMessagesForTicket(ticketId, callback);
    $rootScope.$digest();
    
    expect(httpMock.get).toHaveBeenCalledWith('longPollingUrl');
    
    messageFailDeferred.reject('fail');
    $rootScope.$digest();
    
    expect(httpMock.get).toHaveBeenCalledTimes(2);
    expect(callback).not.toHaveBeenCalled();
    
    messageSuccessDeferred.resolve({data: {"author":"system","kind":"status","id":319435,"type":"TicketComment","ticket":1234,"conv":281408,"text":"hi","status":"Guest","ticketRejected":false,"hide":true,"facility":3836,"time":1460485625862,"owner":null,"terminalState":false,"windowId":null,"ticketType":"ServiceRequest","ticketStatus":"Processing"}});
    $rootScope.$digest();
    
    expect(httpMock.get).toHaveBeenCalledTimes(3);
    expect(callback).toHaveBeenCalledWith('hi');
    
    notMessageDeferred.resolve({data: {"author":"system","kind":"status","id":319435,"type":"OtherType","ticket":312649,"conv":281408,"text":"hi","status":"Guest","ticketRejected":false,"hide":true,"facility":3836,"time":1460485625862,"owner":null,"terminalState":false,"windowId":null,"ticketType":"ServiceRequest","ticketStatus":"Processing"}});
    $rootScope.$digest();
    
    expect(httpMock.get).toHaveBeenCalledTimes(4);
    expect(callback).toHaveBeenCalledTimes(1);
    
    wrongTicketMessageDeferred.resolve({data: {"author":"system","kind":"status","id":319435,"type":"TicketComment","ticket":312649,"conv":281408,"text":"hi","status":"Guest","ticketRejected":false,"hide":true,"facility":3836,"time":1460485625862,"owner":null,"terminalState":false,"windowId":null,"ticketType":"ServiceRequest","ticketStatus":"Processing"}});
    $rootScope.$digest();

    expect(httpMock.get).toHaveBeenCalledTimes(5);
    expect(callback).toHaveBeenCalledTimes(1);
    
    expect(httpMock.get).not.toHaveBeenCalledWith(undefined);
    expect(httpMock.get).not.toHaveBeenCalledWith('websocketUrl');
  })) 
})