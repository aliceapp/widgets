describe('AppController', function() {
  var controller, sercurityServiceMock, cartServiceMock, scope, state, ionicModal, deferredLogin, deferredTemplate, modal;
  
  beforeEach(module('guest'));
  beforeEach(module(function($provide, $urlRouterProvider) {  
    $provide.value('$ionicTemplateCache', function(){} );
    $urlRouterProvider.deferIntercept();
  }));
 
  beforeEach(inject(function($controller, $q, $rootScope) {
    scope = {};
    securityServiceMock = {
        initLogin: jasmine.createSpy('init login spy')
    };
    ionicModal = {};
    cartServiceMock = {};
    
    state ={
        go: jasmine.createSpy('go spy')
    };
  }))
  
  it('init', inject(function($controller){
    controller = $controller('AppCtrl', 
        {
          '$scope': scope, 
           '$ionicModal': ionicModal, 
           '$state' : state, 
           'securityService': securityServiceMock,
           'cartService' : cartServiceMock
         });
    
    expect(securityServiceMock.initLogin).toHaveBeenCalledWith(scope, ionicModal);
    expect(scope.cartService).toBe(cartServiceMock);
    
    scope.goToCart();
    
    expect(state.go).toHaveBeenCalledWith('app.cart');
  }))
})