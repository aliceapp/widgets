goog.provide("service.SecurityService");

service.SecurityService = function(appConfig, loginService) {
  if (appConfig.reservationId) {
    this.currentUser = {uuid:reservationId};
  } else if (appConfig.hasReservationInfo()) {
    this.initLogin = function($scope) {
      loginService.login({room: appConfig.room, name: appConfig.last}).then(function(response) {
        securityService.currentUser = response.data;
        $scope.currentUser = response.data;
      });
    }
  }
  this.loginService = loginService;
  this.appConfig = appConfig;
  var securityService = this;
}

service.SecurityService.prototype.secure = function(f, scope) {
  var securityService = this;
  return function() {
    var args = arguments;
    if (securityService.currentUser) {
      return f.apply(this, args);
    } else {
      var currentScope = scope;
      if (!currentScope) {
        currentScope = this;
      }
      currentScope.login(function() {
        return f.apply(this, args);
      });
    }
  }
}

service.SecurityService.prototype.initLogin = function($scope, $ionicModal) {
  var securityService = this;
  $scope.loginData = {};

  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  $scope.login = function(callback) {
    $scope.modal.show();
    $scope.loginCallback = callback;
  };

  $scope.logout = function() {
    $scope.currentUser = null;
    securityService.currentUser = null;
  }
  
  $scope.doLogin = function() {
    var callbak = this.loginCallback;
    securityService.loginService.login(this.loginData).then(function(response) {
      securityService.currentUser = response.data;
      $scope.currentUser = securityService.currentUser;
      $scope.closeLogin();
      $scope.loginData = {};
      var callback = $scope.loginCallback;
      $scope.loginCallback = null;
      if (callback) {
        callback.call();
      }
    }, function() {
      
    });
  };
}