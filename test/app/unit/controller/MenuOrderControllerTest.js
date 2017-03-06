describe('MenuOrderController', function() {
  var controller, ionicPopup, hotelServiceMock, cartServiceMock, securityServiceMock, deferredItem, deferredOptions, scope;
 
  beforeEach(module('guest'));
  beforeEach(module(function($provide, $urlRouterProvider) {  
    $provide.value('$ionicTemplateCache', function(){} );
    $urlRouterProvider.deferIntercept();
  }));
  
  beforeEach(inject(function($controller, $q, $rootScope) {
    scope = {};
    deferredItem = $q.defer();
    deferredOptions = $q.defer();
    hotelServiceMock = {
        loadMenuItem: jasmine.createSpy('load item spy')
          .and.returnValue(deferredItem.promise),
        loadMenuItemOptions: jasmine.createSpy('load options spy')
          .and.returnValue(deferredOptions.promise),
    };
    securityServiceMock = {
        secure: function(f) {
          return function() {
            f.call();
          }
        }
    };
    cartServiceMock = {
        add: jasmine.createSpy('add to cart spy'),
    }
    ionicPopup = {
        alert: jasmine.createSpy('alert spy')
    }
  }))
  
  describe('Add to cart', function() {
    it('add to cart', inject(function($controller, $rootScope) {
      var item = {'id': 1, 'name': 'item 1', price: 1.0};
      var options = [{'id': 1, 'name': 'Option 1'}, {'id': 2, 'name': 'Option 2'}];
      deferredItem.resolve({data: item});
      deferredOptions.resolve({data: options});
      
      controller = $controller('MenuOrderCtrl', {'$scope': scope, '$stateParams': {facilityId: 1, menuId: 2, itemId: 3}, 'hotelService': hotelServiceMock, '$ionicPopup': ionicPopup, 'cartService': cartServiceMock, 'securityService': securityServiceMock});
      $rootScope.$digest();
      
      scope.menuOrderForm = {'option1': {id: 1, name: 'Value 1', price: 55}, 'option2': 'Value 2', 'quantity': 5};
      
      scope.addToCart();
      
      expect(scope.item).toBe(item);
      expect(scope.options).toBe(options);
      expect(cartServiceMock.add).toHaveBeenCalledWith({menuId: 2, itemId: 3, itemName: 'item 1', price: 1.0, quantity: 5, options: [{id: 1, value: 1, name: 'Value 1'}, {id: 2, value: 'Value 2'}]})
      expect(scope.menuOrderForm).toEqual({});
    }))
  })
   
  
  describe('getTotal', function() {
    it('getTotal', inject(function($controller, $rootScope) {
      var item = {'id': 1, 'name': 'item 1', price: 3.5};
      var options = [{'id': 1, 'name': 'Option 1', options: [{"id":15572,"price":0.0,"name":"Small"}, {"id":15573,"price":2.5,"name":"Large"}]}, {'id': 2, 'name': 'Option 2'}];
      deferredItem.resolve({data: item});
      deferredOptions.resolve({data: options});
      
      controller = $controller('MenuOrderCtrl', {'$scope': scope, '$stateParams': {facilityId: 1, menuId: 2, itemId: 3}, 'hotelService': hotelServiceMock, 'cartService': cartServiceMock});
      $rootScope.$digest();
      
      expect(scope.getTotal()).toBe(0);
      
      scope.menuOrderForm = {'option1': {id: 15572, price:0.0}, 'option2': 'Value 2', 'quantity': 5};
      
      expect(scope.getTotal()).toBe(17.5);

      scope.menuOrderForm = {'option1': {id: 15573, price:2.5}, 'option2': 'Value 2', 'quantity': 5};
      
      expect(scope.getTotal()).toBe(30);
      
      scope.menuOrderForm = {'option1': {id: 15573, price:2.5}, 'option2': 'Value 2', 'quantity': '5'};
      
      expect(scope.getTotal()).toBe(30);
    }))
  })
})