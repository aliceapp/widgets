describe('CartController', function() {
  var controller, securityServiceMock, cartServiceMock, scope, ionicPopup;
 
  beforeEach(module('guest'));
  beforeEach(module(function($provide, $urlRouterProvider) {  
    $provide.value('$ionicTemplateCache', function(){} );
    $urlRouterProvider.deferIntercept();
  }));
  
  beforeEach(inject(function($controller, $q, $rootScope, cartService, securityService) {
    scope = {};
    securityServiceMock = {
        secure: function(f) {
          return function() {
            f.call();
          }
        }
    };
    
    cartServiceMock = cartService;
    cartServiceMock.placeOrder = jasmine.createSpy('cart service spy')
      .and.callFake(function(f) {
        f.call();
      });
    cartServiceMock.setSpecialInfo = jasmine.createSpy('special info spy');
    ionicPopup = {
        alert: jasmine.createSpy('alert spy')
    }
  }))
  
  describe('Place order', function() {
    it('Place order', inject(function($controller, $rootScope) {
      controller = $controller('CartCtrl', {'$scope': scope, '$ionicPopup': ionicPopup, 'securityService': securityServiceMock, 'cartService': cartServiceMock});
      scope.cartForm = {info: 'test info'};
      
      scope.placeOrder();
      
      expect(cartServiceMock.setSpecialInfo).toHaveBeenCalledWith('test info');
      expect(cartServiceMock.placeOrder).toHaveBeenCalled();
      expect(ionicPopup.alert).toHaveBeenCalled();
    }))
  })
  
})