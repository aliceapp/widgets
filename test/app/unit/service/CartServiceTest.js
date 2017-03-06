describe('CartService', function() {
  var service, ticketServiceMock, order1Deferred, order2Deferred;
  
  beforeEach(module('guest'));
  
  beforeEach(module(function($provide, $urlRouterProvider) {  
    $provide.value('$ionicTemplateCache', function(){} );
    $urlRouterProvider.deferIntercept();
  }));
  
  beforeEach(inject(function(cartService, $q) {
    order1Deferred = $q.defer();
    order2Deferred = $q.defer();
    ticketServiceMock = {
        createMenuOrder: jasmine.createSpy('create menu order spy').and.returnValues(order1Deferred.promise, order2Deferred.promise)
    };
    service = cartService;
    service._ticketService = ticketServiceMock;
  }))
  
  it('add to cart', function(){
    service.add({menuId: 1, itemId: 1, itemName: 'name 1', price: 1.0, quantity: 10, options: [{id: 1, value: 'value 1', id: 2, value: 2}]});
    
    expect(service.get()).toEqual([{menuId: 1, items: [{id: 1, name: 'name 1', price: 1.0, quantity: 10, options: [{id: 1, value: 'value 1', id: 2, value: 2}]}]}]);
    expect(service.getTotalPrice()).toBe(10.0)
    expect(service.size()).toBe(1)
    
    service.add({menuId: 1, itemId: 2, itemName: 'name 2', price: 2.0, quantity: 5});
    
    expect(service.get()).toEqual([{menuId: 1, items: [{id: 1, name: 'name 1', price: 1.0, quantity: 10, options: [{id: 1, value: 'value 1', id: 2, value: 2}]}, {id: 2, name: 'name 2', price: 2.0, quantity: 5}]}]);
    expect(service.getTotalPrice()).toBe(20.0)
    expect(service.size()).toBe(2)
    
    service.add({menuId: 1, itemId: 2, itemName: 'name 2', price: 2.0, quantity: 2});
    
    expect(service.get()).toEqual([{menuId: 1, items: [{id: 1, name: 'name 1', price: 1.0, quantity: 10, options: [{id: 1, value: 'value 1', id: 2, value: 2}]}, {id: 2, name: 'name 2', price: 2.0, quantity: 7}]}]);
    expect(service.getTotalPrice()).toBe(24.0)
    expect(service.size()).toBe(2)
    
    service.add({menuId: 1, itemId: 2, itemName: 'name 2', price: 2.0, quantity: 4, options: [{id: 3, value: 'value 3', price: 1.0}]});
    
    expect(service.get()).toEqual([{menuId: 1, items: [{id: 1, name: 'name 1', price: 1.0, quantity: 10, options: [{id: 1, value: 'value 1', id: 2, value: 2}]}, {id: 2, name: 'name 2', price: 2.0, quantity: 7}, {id: 2, name: 'name 2', quantity: 4, price: 2.0, options: [{id: 3, value: 'value 3', price: 1.0}]}]}]);
    expect(service.getTotalPrice()).toBe(36.0)
    expect(service.size()).toBe(3)
    
    service.add({menuId: 2, itemId: 5, itemName: 'name 3', price: 3.0, quantity: 1});
    
    expect(service.get()).toEqual([{menuId: 1, items: [{id: 1, name: 'name 1', price: 1.0, quantity: 10, options: [{id: 1, value: 'value 1', id: 2, value: 2}]}, {id: 2, name: 'name 2', price: 2.0, quantity: 7}, {id: 2, name: 'name 2', quantity: 4, price: 2.0, options: [{id: 3, value: 'value 3', price: 1.0}]}]}, {menuId: 2, items: [{id: 5, name: 'name 3', price: 3.0, quantity: 1}]}]);
  }) 
  
  it('remove from cart', function(){
    service.add({menuId: 1, itemId: 1, itemName: 'name 1', price: 1.0, quantity: 10});
    service.add({menuId: 1, itemId: 2, itemName: 'name 2', price: 2.0, quantity: 10});
    service.add({menuId: 2, itemId: 3, itemName: 'name 3', price: 3.0, quantity: 10});
    
    service.remove(0, 1);
    
    expect(service.get()).toEqual([{menuId: 1, items:[{id: 1, name: 'name 1', price: 1.0, quantity: 10}]}, {menuId: 2, items:[{id: 3, name: 'name 3', price: 3.0, quantity: 10}]}])
    
    service.remove(1, 0);
    
    expect(service.get()).toEqual([{menuId: 1, items:[{id: 1, name: 'name 1', price: 1.0, quantity: 10}]}])
  })
  
  it('place order', inject(function($rootScope){
    service.add({menuId: 1, itemId: 1, quantity: 10});
    service.add({menuId: 2, itemId: 3, quantity: 10});
    callback = jasmine.createSpy('callback spy');
    order1Deferred.resolve({data: 'success'});
    order2Deferred.resolve({data: 'success'});
    
    service.placeOrder(callback);
    $rootScope.$digest();
    
    expect(callback).toHaveBeenCalledTimes(1);
    expect(service.get()).toEqual([]);
  }))
  
  
  it('set special info', inject(function($rootScope){
    service.add({menuId: 1, itemName: 'name 1', itemId: 1, quantity: 10});
    service.add({menuId: 2, itemName: 'name 2', itemId: 3, quantity: 10});
    
    service.setSpecialInfo('test info');
    
    expect(service.get()).toEqual([{menuId: 1, items: [{id: 1, name: 'name 1', quantity: 10}], info: 'test info'}, {menuId: 2, items: [{id: 3, name: 'name 2', quantity: 10}], info: 'test info'}]);
  }))
})