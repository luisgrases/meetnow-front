(function() {
  'use strict';

  angular
  .module('app.registration')
  .controller('RegistrationController', RegistrationController);

  RegistrationController.$inject = ['$auth', '$ionicPopup', 'ErrorMessage', '$rootScope', 'Session', '$state', 'SocketMessageHandler'];

  /* @ngInject */
  function RegistrationController($auth, $ionicPopup, ErrorMessage, $rootScope, Session, $state, SocketMessageHandler) {
    var vm = this;
    vm.registerUser = registerUser;
    vm.captcha = null;

    function registerUser(){
      $auth.submitRegistration(vm.registrationForm)
        .then(function(resp) {
          $auth.submitLogin(vm.registrationForm)
          .then(function(response) {
            Session.create(response.id);
            SocketMessageHandler.subscribeToMyself(response.id);
            $state.go("tab.events.index");
          })
          .catch(function(response) {
            ErrorMessage.showAlert(response.errors);
          });
        })
        .catch(function(resp) {
          ErrorMessage.showAlert(resp.data.errors.full_messages);
        });
    };
  }

})();
