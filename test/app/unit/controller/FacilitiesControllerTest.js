describe('FacilitiesController', function() {
  var controller, hotelServiceMock, defferedFacilities, scope;
 
  beforeEach(module('guest'));
  beforeEach(module(function($provide, $urlRouterProvider) {  
    $provide.value('$ionicTemplateCache', function(){} );
    $urlRouterProvider.deferIntercept();
  }));
  
  beforeEach(inject(function($controller, $q, $rootScope) {
    scope = {};
    defferedFacilities = $q.defer();
    hotelServiceMock = {
        loadFacilities: jasmine.createSpy('load facilities spy')
          .and.returnValue(defferedFacilities.promise)
    }
  }))
  
  describe('#loadFacilites', function() {
    it('should load facilites', inject(function($controller, $rootScope) {
      var facilities = [{'name': 'facility 1', 'name': 'facility 2'}];
      defferedFacilities.resolve({data: facilities});
      
      controller = $controller('FacilitiesCtrl', {'$scope': scope, 'hotelService': hotelServiceMock});
      $rootScope.$digest();
      
      expect(scope.facilities).toBe(facilities);
    }))
  })
})