(function() {
  'use strict';

  angular
    .module('app.passreset')
    .config(routes);

  routes.$inject = ['$stateProvider'];

  function routes($stateProvider) {
    $stateProvider

    .state('passreset', {
      url: '/reset_password',
      templateUrl: 'passreset/passreset.html',
      controller: 'PasswordResetController as vm'
    });
  }
})();
