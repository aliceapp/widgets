describe('ServiceRequestController', function() {
  var controller, hotelServiceMock, securityServiceMock, ticketServiceMock, 
    deferredService, deferredOptions, scope, ionicPopup;
 
  beforeEach(module('guest'));
  beforeEach(module(function($provide, $urlRouterProvider) {  
    $provide.value('$ionicTemplateCache', function(){} );
    $urlRouterProvider.deferIntercept();
  }));
  
  beforeEach(inject(function($controller, $q, $rootScope) {
    scope = {};
    deferredService = $q.defer();
    deferredOptions = $q.defer();
    deferredCreateTicket = $q.defer();
    hotelServiceMock = {
        loadService: jasmine.createSpy('load service spy')
          .and.returnValue(deferredService.promise),
        loadServiceOptions: jasmine.createSpy('load options spy')
          .and.returnValue(deferredOptions.promise),
    };
    securityServiceMock = {
        secure: function(f) {
          return function() {
            f.call();
          }
        }
    };
    ticketServiceMock = {
        createServiceRequest: jasmine.createSpy('create service request spy')
          .and.returnValue(deferredCreateTicket.promise),
    }
    ionicPopup = {
        alert: jasmine.createSpy('alert spy')
    }
  }))
  
  describe('Submit service', function() {
    it('init facility page', inject(function($controller, $rootScope) {
      var service = {'id': 1, 'name': 'service 1'};
      var options = [{'id': 1, 'name': 'Option 1'}, {'id': 2, 'name': 'Option 2'}];
      deferredService.resolve({data: service});
      deferredOptions.resolve({data: options});
      var facilityId = 1;
      
      controller = $controller('ServiceRequestCtrl', {'$scope': scope, '$stateParams': {facilityId: facilityId, serviceId: service.id}, '$ionicPopup': ionicPopup, 'hotelService': hotelServiceMock, 'securityService': securityServiceMock, 'ticketService': ticketServiceMock});
      $rootScope.$digest();
      
      expect(scope.service).toBe(service);
      expect(scope.options).toBe(options);
      expect(scope.serviceRequestForm).toBeDefined();
      expect(scope.sendServiceRequest).toBeDefined();
      expect(hotelServiceMock.loadService).toHaveBeenCalledWith(facilityId, service.id);
      expect(hotelServiceMock.loadServiceOptions).toHaveBeenCalledWith(facilityId, service.id);
      
      deferredCreateTicket.resolve({});
      scope.serviceRequestForm = {'option1': 'Test1', 'option2': 'Test2', 'info': 'test info'};
      scope.sendServiceRequest();
      $rootScope.$digest();
      expect(ticketServiceMock.createServiceRequest).toHaveBeenCalledWith({serviceId: 1, options: [{id: 1, value: 'Test1'}, {id: 2, value: 'Test2'}], info: 'test info'})
      expect(scope.serviceRequestForm).toEqual({});
      expect(ionicPopup.alert).toHaveBeenCalled();
    }))
  })
  
})