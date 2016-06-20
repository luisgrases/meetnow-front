(function() {
  'use strict';

  angular
  .module('app.authentication')
  .controller('AuthenticationController', AuthenticationController);

  AuthenticationController.$inject = ['$auth','$rootScope', 'Session', '$state', 'ErrorMessage', 'SocketMessageHandler'];

  /* @ngInject */
  function AuthenticationController($auth, $rootScope, Session, $state, ErrorMessage, SocketMessageHandler) {
    var vm = this;
    vm.signInUser = signInUser;
    vm.goToRegistration = goToRegistration;
    vm.goToResetPassword = goToResetPassword;

    function goToRegistration(){
       $state.go("registration");
    }

    function goToResetPassword(){
       $state.go("passreset");
    }

    function signInUser() {
      vm.loginForm.username = vm.loginForm.username.toLowerCase()
      $auth.submitLogin(vm.loginForm)
        .then(function(response) {
          Session.create(response.id);
          SocketMessageHandler.subscribeToMyself(response.id);
          $state.go("tab.events.index");
        })
      .catch(function(response) {
        ErrorMessage.showAlert(response.errors);
      });
    };
  }
})();
