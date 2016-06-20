(function() {
  'use strict';

  angular
  .module('app.passreset')
  .controller('PasswordResetController', PasswordResetController);

  PasswordResetController.$inject = ['$auth', '$ionicPopup', 'ErrorMessage', '$rootScope'];

  /* @ngInject */
  function PasswordResetController($auth, $ionicPopup, ErrorMessage, $rootScope) {
    var vm = this;
    vm.resetPassword = resetPassword;

    function resetPassword(email) {
      $auth.requestPasswordReset({email: email})
        .then(function(resp) {
          showSuccessResponse();
        })
        .catch(function(response) {
          ErrorMessage.showAlert(response.data.errors);
          // handle error response
        });
    }

    function showSuccessResponse() {
      var alertPopup = $ionicPopup.alert({
        title: 'Success',
        template: 'A password reset link has been sent to your email. Please follow the instructions to reset your password.'
       });
      alertPopup.then(function(res) {
     });
    };
  
  }


})();
