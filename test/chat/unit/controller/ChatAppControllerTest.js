describe('ChatAppController', function() {
  var controller,  securityServiceMock, hotelServiceMock, 
    deferredCreateTicket, deferredService, scope, ionicModal;
  var service = {'id': 1, 'name': 'service 1'};
  var facilityId = 1;
 
  beforeEach(module('chat'));
  beforeEach(module(function($provide, $urlRouterProvider) {  
    $provide.value('$ionicTemplateCache', function(){} );
    $urlRouterProvider.deferIntercept();
  }));
  
  beforeEach(inject(function($controller, $q, $rootScope) {
    scope = {};
    ionicModal = {};
    deferredService = $q.defer();
    deferredService.resolve({data: service});
    hotelServiceMock = {
        loadService: jasmine.createSpy('load service spy')
          .and.returnValue(deferredService.promise)
    };
    securityServiceMock = {
        secure: function(f) {
          return function() {
            f.call();
          }
        },
        initLogin: jasmine.createSpy('init login spy')
    };
  }))
  
  it('init', inject(function($controller, $rootScope) {
    controller = $controller('ChatAppCtrl', 
        {
          '$scope': scope, 
          '$ionicModal': ionicModal, 
          'appConfig': {facilityId: facilityId, serviceId: service.id}, 
          'hotelService': hotelServiceMock, 
          'securityService': securityServiceMock 
         });
    $rootScope.$digest();
    
    expect(scope.service).toBe(service);
    expect(scope.messageForm).toEqual({});
    expect(securityServiceMock.initLogin).toHaveBeenCalledWith(scope, ionicModal);
    expect(hotelServiceMock.loadService).toHaveBeenCalledWith(facilityId, service.id);
  }))
})