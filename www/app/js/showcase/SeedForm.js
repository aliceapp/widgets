var showcase = showcase || {};
showcase.SeedForm = function(form, example) {
  var $form = $(form);
  var $last = $($form.find('[name="last"]'));
  var $room = $($form.find('[name="room"]'));
  var seedForm = this;
  
  this.addParams = function (url) {
    var result = url;
    result = replaceUrlParam(result, 'last', $last.val());
    result = replaceUrlParam(result, 'room', $room.val());
    return result;
  }
  
  $($form.find('button')).click(function(e) {
    e.preventDefault();
    var src = $(example).attr('src');
    $(example).attr('src', seedForm.addParams(src));
  })
  
  function replaceUrlParam(url, paramName, paramValue){
    var pattern = new RegExp('\\b('+paramName+'=).*?(&|$)')
    if(url.search(pattern)>=0){
        return url.replace(pattern,'$1' + paramValue + '$2');
    }
    if (url.indexOf('#') > 0) {
      var result = url.substring(0, url.indexOf('#'));
      result = result + (result.indexOf('?')>0 ? '&' : '?') + paramName + '=' + paramValue;
      return result + url.substring(url.indexOf('#'));
    }
    return url + (url.indexOf('?')>0 ? '&' : '?') + paramName + '=' + paramValue;
  }
}