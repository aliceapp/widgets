describe('MakeServiceRequestTest', function(){
  var testMocks = require('./mocks');

  beforeEach(function() {
    testMocks.mocks.setup();
  });
  
  afterEach(function () {
    testMocks.mocks.cleanup();
  });

  it('Make service request by not logged in user', function() {
    browser.get('/app');

    element.all(by.repeater('facility in facilities')).
      get(0).
        element(by.linkText('facility 1')).
        click();
    element.all(by.repeater('service in services')).
      get(0).
        element(by.linkText('service 3')).
        click();
    var options = element.all(by.repeater('option in options'));
    options.get(0).element(by.tagName('input')).sendKeys('test')
    var select = options.get(1).element(by.tagName('select'));
    select.click();
    var selectOptions = element.all(by.tagName('option'));
    selectOptions.get(1).click();
    element(by.buttonText('Submit')).click();
    element(by.name('name')).sendKeys('Test');
    element(by.name('room')).sendKeys('666');
    element(by.name('acceptTerms')).click();
    element(by.buttonText('Log in')).click();
    element(by.className('popup-body')).getText().then(function(text) {
      expect(text.indexOf('success') > -1).toBe(true);
    }, function() {
      fail();
    });
    element(by.buttonText('OK')).click();
  })
});