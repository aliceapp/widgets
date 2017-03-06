var ngMockE2E = require('ng-mock-e2e');

var mocks = {};

mocks.httpBackendMock = function() {
      angular.module('httpBackendMock', ['guest', 'ngMockE2E'])
      .run(function($httpBackend) {
        
        $httpBackend.whenGET(/.*\/v1\/hotels\/6\/facilities\/1\/menus\/1\/items\/1\/options.*/)
          .respond([{id: 1, name:'option 1', dataType: 'SelectOneSub', required: true, options: [{id: 2, name: 'value 1', price: 1.0}, {id: 3, name: 'value 2', price: 0.0}]}]);
        
        $httpBackend.whenGET(/.*\/v1\/hotels\/6\/facilities\/1\/menus\/2\/items\/3\/options.*/)
          .respond([]);
        
        $httpBackend.whenGET(/.*\/v1\/hotels\/6\/facilities\/1\/menus\/1\/items\/1.*/)
          .respond({id: 1, name:'item 1', price: 10.0});
        
        $httpBackend.whenGET(/.*\/v1\/hotels\/6\/facilities\/1\/menus\/2\/items\/3.*/)
          .respond({id: 3, name:'item 3'});
        
        $httpBackend.whenGET(/.*\/v1\/hotels\/6\/facilities\/1\/menus\/1\/items.*/)
          .respond([{id: 1, name:'item 1', price: 10.0}, {id: 2, name:'item 2', price: 5.0}]);
        
        $httpBackend.whenGET(/.*\/v1\/hotels\/6\/facilities\/1\/menus\/2\/items.*/)
          .respond([{id: 3, name:'item 3'}, {id: 4, name:'item 4'}]);
        
        $httpBackend.whenGET(/.*\/v1\/hotels\/6\/facilities\/1\/menus\/1.*/)
          .respond({id: 1, name:'menu 1'});
        
        $httpBackend.whenGET(/.*\/v1\/hotels\/6\/facilities\/1\/menus\/2.*/)
          .respond({id: 2, name: 'menu 2'});
        
        $httpBackend.whenPOST(/.*\/v1\/hotels\/6\/reservations\/test-uuid\/serviceRequests.*/)
          .respond(function(method, url, data, headers, params) {
            if (JSON.parse(data).options.length == 0) {
              return [500, {reason: 'fail'}];
            } else {
              return [200, {id: 135}];
            }
          });
        
        $httpBackend.whenPOST(/.*\/v1\/hotels\/6\/reservations.*/)
          .respond({uuid: 'test-uuid', lastname:'Last Name'});
        
        $httpBackend.whenGET(/.*/).passThrough();
      });
    };
    
mocks.setup = function() {
      ngMockE2E.addMockModule();
      ngMockE2E.addAsDependencyForModule('guest');
      ngMockE2E.embedScript('lib/mock/angular-mocks.js');
      browser.addMockModule('httpBackendMock', mocks.httpBackendMock);
    }

mocks.cleanup = function() {
  ngMockE2E.clearMockModules();
}

exports.mocks = mocks;