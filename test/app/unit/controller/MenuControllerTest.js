describe('MenuController', function() {
  var controller, hotelServiceMock, deferredMenu, deferredItems, scope;
  beforeEach(module('guest'));
  beforeEach(module(function($provide, $urlRouterProvider) {  
    $provide.value('$ionicTemplateCache', function(){} );
    $urlRouterProvider.deferIntercept();
  }));
  
  beforeEach(inject(function($controller, $q, $rootScope) {
    scope = {};
    deferredMenu = $q.defer();
    deferredItems = $q.defer();
    hotelServiceMock = {
        loadMenu: jasmine.createSpy('load menu spy')
          .and.returnValue(deferredMenu.promise),
        loadMenuItems: jasmine.createSpy('load menu items spy')
          .and.returnValue(deferredItems.promise)
    }
  }))
  
  it('Init', inject(function($controller, $rootScope) {
    var menu = {id: 1, name: "menu 1"};
    var items = [{id: 1, name: "item 1", price: 100.00, currency: "$"}, {id: 2, name: "item 2", price: 50.00, currency: "$"}];
    deferredMenu.resolve({data: menu});
    deferredItems.resolve({data: items});
    
    controller = $controller('MenuCtrl', {'$scope': scope, '$stateParams': {facilityId: 21, menuId: 1}, 'hotelService': hotelServiceMock});
    $rootScope.$digest();
    
    expect(scope.menu).toBe(menu);
    expect(scope.items).toBe(items);
    expect(hotelServiceMock.loadMenu).toHaveBeenCalledWith(21, 1)
    expect(hotelServiceMock.loadMenuItems).toHaveBeenCalledWith(21, 1)
  }))
})