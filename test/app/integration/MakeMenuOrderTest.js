describe('MakeMenuOrderTest', function(){
  var testMocks = require('./mocks');

  beforeEach(function() {
    testMocks.mocks.setup();
  });
  
  afterEach(function () {
    testMocks.mocks.cleanup();
  });

  it('Make menu order of several items from different menus by not logged in user', function() {
    browser.get('/app');
    var EC = protractor.ExpectedConditions;

    element.all(by.repeater('facility in facilities')).
      get(0).
        element(by.linkText('facility 1')).
        click();
    element.all(by.repeater('menu in menus')).
      get(0).
        element(by.linkText('menu 1')).
        click();

    element.all(by.repeater('item in items')).
      get(0).
        element(by.tagName('a')).
        click();

    element(by.model('menuOrderForm.quantity')).sendKeys('5');
    var select = element(by.tagName('select'));
    select.click();
    var selectOptions = element.all(by.tagName('option'));
    selectOptions.get(1).click();
    element(by.buttonText('Add to Cart')).click();
    
    element(by.className('ion-navicon')).click();
    $('#cart').click();
    element(by.buttonText('Place Order')).click();
    
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