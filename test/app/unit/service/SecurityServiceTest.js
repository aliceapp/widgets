describe('SecurityService', function() {
  var service, underTest, scope, modal, deferredLogin, deferredTemplate, ionicModal, loginServiceMock;
  
  beforeEach(module('guest'));
  beforeEach(module(function($provide, $urlRouterProvider) {  
    $provide.value('$ionicTemplateCache', function(){} );
    $urlRouterProvider.deferIntercept();
  }));
  
  beforeEach(inject(function(securityService, $q) {
    service = securityService;
    scope = {
        
    };
    modal = {
        hide: jasmine.createSpy('hide modal spy'),
        show: jasmine.createSpy('show modal spy')
    };
    deferredLogin = $q.defer();
    deferredTemplate = $q.defer();
    deferredTemplate.resolve(modal);
    ionicModal = {
        fromTemplateUrl: jasmine.createSpy('load template spy')
          .and.returnValue(deferredTemplate.promise)
    };
    loginServiceMock = {
        login: jasmine.createSpy('load service spy')
          .and.returnValue(deferredLogin.promise)
    };
    underTest = function() {
    }
    underTest.test = service.secure(function(param) {
      return param;
    })
    underTest.login = jasmine.createSpy('Login spy').and.callFake(function(f) {
      return f.call();
    })
    service.loginService = loginServiceMock;
  }))
  
  it('Logged in', function(){
    service.currentUser = {};
    
    expect(underTest.test('expected')).toEqual('expected');
  })
  
  
  it('Not Logged in', function(){
    service.currentUser = null;
    
    underTest.test('test');
    
    expect(underTest.login).toHaveBeenCalled();
  })
  
  it('PassScope', function(){
    service.currentUser = null;
    testScope = function(){};
    testScope.login = jasmine.createSpy('TestScope spy');
    underTest.test = service.secure(function(param) {
      return param;
    }, testScope)
    
    underTest.test('test');
    
    expect(testScope.login).toHaveBeenCalled();
  })

  it('doLogin', inject(function($rootScope) {
    service.initLogin(scope, ionicModal);
    var user = {name: 'Username', uuid: 'reservationUUID'};
    deferredLogin.resolve({data: user});
    var loginCallback = jasmine.createSpy('callback spy');
    scope.loginCallback = loginCallback;
    
    scope.loginData = {name: 'test', room: '666'};
    scope.doLogin();
    $rootScope.$digest();
    
    expect(service.currentUser).toBe(user);
    expect(scope.currentUser).toBe(user);
    expect(modal.hide).toHaveBeenCalled();
    expect(loginCallback).toHaveBeenCalled();
    expect(scope.loginCallback).toBe(null);
    expect(scope.loginData).toEqual({});
  }))
  
  it('login', inject(function($rootScope) {
    service.initLogin(scope, ionicModal);
    scope.loginCallback = null;
    
    var callback = jasmine.createSpy('callback spy');
    $rootScope.$digest();
    scope.login(callback);
    
    expect(modal.show).toHaveBeenCalled();
    expect(scope.loginCallback).toBe(callback);
  }))
  
    
  it('logout', inject(function($controller, $rootScope) {
    service.initLogin(scope, ionicModal);
    $rootScope.$digest();
    scope.currentUser = {};
    service.currentUser = {};
    
    scope.logout();
    
    expect(scope.currentUser).toBe(null);
    expect(service.currentUser).toBe(null);
  }))
})