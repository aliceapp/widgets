describe('FacilityController', function() {
  var controller, hotelServiceMock, deferredFacility, deferredMenus, deferredServices, scope;
 
  beforeEach(module('guest'));
  beforeEach(module(function($provide, $urlRouterProvider) {  
    $provide.value('$ionicTemplateCache', function(){} );
    $urlRouterProvider.deferIntercept();
  }));
  
  beforeEach(inject(function($controller, $q, $rootScope) {
    scope = {};
    deferredFacility = $q.defer();
    deferredMenus = $q.defer();
    deferredServices = $q.defer();
    hotelServiceMock = {
        loadFacility: jasmine.createSpy('load facility spy')
          .and.returnValue(deferredFacility.promise),
        loadMenus: jasmine.createSpy('load menus spy')
          .and.returnValue(deferredMenus.promise),
        loadServices: jasmine.createSpy('load services spy')
          .and.returnValue(deferredServices.promise),
    }
  }))
  
  describe('Init facility page', function() {
    it('init facility page', inject(function($controller, $rootScope) {
      var facility = {'id': 1, 'name': 'facility 1'};
      var menus = [{'id': 1, 'name': 'Menu 1'}, {'id': 2, 'name': 'Menu 2'}]
      var services = [{'id': 3, 'name': 'Service 1'}, {'id': 4, 'name': 'Service 2'}]
      deferredFacility.resolve({data: facility});
      deferredMenus.resolve({data: menus});
      deferredServices.resolve({data: services});
      
      controller = $controller('FacilityCtrl', {'$scope': scope, '$stateParams': {facilityId: facility.id}, 'hotelService': hotelServiceMock});
      $rootScope.$digest();
      
      expect(scope.facility).toBe(facility);
      expect(scope.services).toBe(services);
      expect(scope.menus).toBe(menus);
    }))
  })
})