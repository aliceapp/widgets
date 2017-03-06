var showcase = showcase || {};;
showcase.ShowcaseForm = function(type, params, seedForm) {
  var $form = $('#' + type + 'WidgetForm');
  var apiUrl = 'http://rapi.aliceapp.com/guest/v1';
  var hotelIdSuggest;
  var facilityIdSuggest
  var typeIdSuggest;
  var $apikey = $($form.find('[name="apikey"]'));
  var $button = $($form.find('button'));
  var widgetUrl = 'http://' + window.location.host + '/app?widget' + params;
  if (type == 'chat') {
    var widgetUrl = 'http://' + window.location.host + '/app/chat.html';
  }
  var $codeContainer = $('#' + type + 'CodeContainer');
  var $target = $('#' + type + 'Example');
  
  function maxSelectionRenderer() {
    return '';
  }
  
  function enableGetCode() {
    if ($apikey.val().length > 0 && 
        hotelIdSuggest.getValue().length > 0 && 
        facilityIdSuggest.getValue().length > 0 &&
        typeIdSuggest.getValue().length > 0) {
      $button.removeAttr('disabled');
    } else {
      $button.attr('disabled', 'disabled');
    }
  }
  
  $button.click(function(e) {
    e.preventDefault();
    var apikey = $apikey.val();
    var hotelId = hotelIdSuggest.getValue()[0];
    var facilityId = facilityIdSuggest.getValue()[0];
    var typeId = typeIdSuggest.getValue()[0];
    
    var url = widgetUrl + '&apikey=' + apikey + '&hotelId=' + hotelId + '#/app/facilities/' + facilityId + '/' + type + 's/' + typeId;
    if (type == 'chat') {
      url = widgetUrl + '?apikey=' + apikey + '&hotelId=' + hotelId + '&facilityId=' + facilityId + '&serviceId=' + typeId;
    }
    if (seedForm) {
      url = seedForm.addParams(url);
    }
    var code = '<iframe seamless="seamless" frameBorder="0" src="' + url + '" style="width: 365px; height: 792px;" ></iframe>';
    $codeContainer.val(code).select();
    $target.attr('src', url);
  })
  
  hotelIdSuggest = $form.find('[name="hotelId"]').magicSuggest({
    data: apiUrl + '/hotels',
    valueField: 'id',
    displayField: 'name',
    maxSelection: 1,
    minChars: 2,
    useZebraStyle: true,
    allowFreeEntries: false,
    disabled: true,
    method: 'get',
    maxSelectionRenderer: maxSelectionRenderer
  });
 
  $(hotelIdSuggest).on('selectionchange', function() {
    if(this.getValue().length>0) {
      facilityIdSuggest.enable();
      var hotel = this.getValue()[0];
      $.ajax(apiUrl + '/hotels/' + hotel + '/facilities?apikey=' + $apikey.val()).done(function(data) {
        facilityIdSuggest.setData(data)
      });
    } else {
      facilityIdSuggest.clear();
      facilityIdSuggest.disable();
      typeIdSuggest.clear();
      typeIdSuggest.disable();
    }
  })
  $(hotelIdSuggest).on('selectionchange', enableGetCode);
  facilityIdSuggest = $form.find('[name="facilityId"]').magicSuggest({
    valueField: 'id',
    displayField: 'name',
    maxSelection: 1,
    useZebraStyle: true,
    allowFreeEntries: false,
    disabled: true,
    method: 'get',
    maxSelectionRenderer: maxSelectionRenderer
  });
  $(facilityIdSuggest).on('selectionchange', enableGetCode);
  
  $(facilityIdSuggest).on('selectionchange', function() {
    if(this.getValue().length>0) {
      typeIdSuggest.enable();
      var hotel = hotelIdSuggest.getValue()[0];
      var facility = this.getValue()[0];
      var services = type;
      if (type == 'chat') {
        services = 'service';
      }
      
      $.ajax(apiUrl + '/hotels/' + hotel + '/facilities/' + facility + '/' + services + 's?apikey=' + $apikey.val()).done(function(data) {
        typeIdSuggest.setData(data)
      });
    } else {
      typeIdSuggest.clear();
      typeIdSuggest.disable();
    }
  });
  var field = type;
  if (type == 'chat'){
    field = 'service';
  }
  typeIdSuggest = $form.find('[name="' + field + 'Id"]').magicSuggest({
    valueField: 'id',
    displayField: 'name',
    maxSelection: 1,
    useZebraStyle: true,
    allowFreeEntries: false,
    disabled: true,
    method: 'get',
    maxSelectionRenderer: maxSelectionRenderer
  });
  
  $(typeIdSuggest).on('selectionchange', enableGetCode);
  
  $apikey.on('change', function() {
    var apikey = $apikey.val();
    hotelIdSuggest.setDataUrlParams({apikey:apikey});
    if (apikey.length > 0) {
      hotelIdSuggest.enable();
    }
  })
  $apikey.on('change', enableGetCode);
}