goog.provide("service.CartService");

service.CartService = function(ticketService, $q) {
  this._cart = [];
  this._ticketService = ticketService;
  this._q = $q;
}

service.CartService.prototype.add = function(form) {
  function createItem(form) {
    item = {};
    item.id = form.itemId;
    item.name = form.itemName;
    if (form.comment) {
      item.comment = form.comment;
    }
    if (form.price) {
      item.price = form.price;
    }
    item.quantity = form.quantity;
    if (form.options) {
      item.options = form.options;
    }
    return item;
  }
  
  for (var i = 0; i < this._cart.length; i++) {
    var order = this._cart[i];
    if (order.menuId == form.menuId) {
      for(var j = 0; j < order.items.length; j++) {
        if (order.items[j].id == form.itemId) {
          if (order.items[j].options == form.options) {
            order.items[j].quantity += form.quantity;
            return;
          }
        }
      }
      order.items.push(createItem(form));
      return;
    }
  }
  menuOrder = {menuId: form.menuId, items: [createItem(form)]};
  this._cart.push(menuOrder);
}

service.CartService.prototype.remove = function(menuIndex, itemIndex) {
  this._cart[menuIndex].items.splice(itemIndex, 1);
  if (this._cart[menuIndex].items.length == 0) {
    this._cart.splice(menuIndex, 1);
  }
}

service.CartService.prototype.placeOrder = function(successHandler) {
  var cartService = this;
  this._ticketService.createMenuOrder(this._cart.pop()).then(function() {
    if (cartService._cart.length > 0) {
      cartService.placeOrder(successHandler);
    } else {
      successHandler.apply(this, arguments);
    }
  });
}

service.CartService.prototype.get = function() {
  return this._cart;
}

service.CartService.prototype.getTotalPrice = function() {
  var result = 0;
  for (var i = 0; i < this._cart.length; i++) {
    var menu = this._cart[i];
    for (var j = 0; j < menu.items.length; j++) {
      var item = menu.items[j];
      if (item.price) {
        var itemPrice = item.price;
        if (item.options) {
          for (var k = 0; k < item.options.length; k++) {
            if (item.options[k].price) {
              itemPrice += item.options[k].price;
            }
          }
        }
        result += itemPrice * item.quantity;
      }
    }
  }
  return result;
}

service.CartService.prototype.size = function() {
  var result = 0;
  for (var i = 0; i < this._cart.length; i++) {
    var menu = this._cart[i];
    result+=menu.items.length;
  }
  return result;
}

service.CartService.prototype.setSpecialInfo = function(info) {
  for (var i = 0; i < this._cart.length; i++) {
    var menu = this._cart[i];
    menu.info = info;
  }
}

service.CartService.prototype.setDeliveryTime = function(deliveryTime) {
  for (var i = 0; i < this._cart.length; i++) {
    var menu = this._cart[i];
    menu.deliveryTime = deliveryTime;
  }
}