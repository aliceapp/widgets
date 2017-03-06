describe('ChatController', function() {
  var controller, chatServiceMock, securityServiceMock, scope;
 
  beforeEach(module('chat'));
  beforeEach(module(function($provide, $urlRouterProvider) {  
    $provide.value('$ionicTemplateCache', function(){} );
    $urlRouterProvider.deferIntercept();
  }));
  
  beforeEach(inject(function($controller, $q, $rootScope) {
    scope = {};
    chatServiceMock = {
        send: jasmine.createSpy('send chat spy'),
        initialized: true
    }
    securityServiceMock = {
        secure: function(f) {
          return function() {
            f.call();
          }
        }
    };
  }))
  
  it('sendMessage', inject(function($controller, $rootScope) {
    controller = $controller('ChatCtrl', 
      {
        '$scope': scope, 
        'chatService': chatServiceMock, 
        'securityService': securityServiceMock
         });
    
    scope.messageForm = {text: 'another message'};
    
    scope.sendMessage();
    
    expect(scope.messageForm).toEqual({});
    expect(chatServiceMock.send).toHaveBeenCalledWith('another message');
  }))
})