describe('StartChatController', function() {
  var controller, chatServiceMock, securityServiceMock, scope, state;
 
  beforeEach(module('chat'));
  beforeEach(module(function($provide, $urlRouterProvider) {  
    $provide.value('$ionicTemplateCache', function(){} );
    $urlRouterProvider.deferIntercept();
  }));
  
  beforeEach(inject(function($controller, $q, $rootScope) {
    scope = {};
    state = {
        go: jasmine.createSpy('go spy')
    };
    securityServiceMock = {
        secure: function(f) {
          return function() {
            f.call();
          }
        }
    };
    chatServiceMock = {
        send: jasmine.createSpy('send chat spy')
    }
  }))
  
  it('startChat', inject(function($controller, $rootScope) {
    controller = $controller('StartChatCtrl', 
        {
          '$scope': scope,
          '$state': state,
          'chatService': chatServiceMock, 
          'securityService': securityServiceMock 
         });
    
    scope.messageForm = {text: 'test message'};
    
    scope.sendMessage();
    
    expect(chatServiceMock.send).toHaveBeenCalledWith('test message');
    expect(state.go).toHaveBeenCalledWith('app.chat');
  }))
})