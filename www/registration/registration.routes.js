(function() {
  'use strict';

  angular
    .module('app.registration')
    .config(routes);

  routes.$inject = ['$stateProvider'];

  function routes($stateProvider) {
    $stateProvider

    .state('registration', {
      url: '/registration',
      templateUrl: 'registration/registration.html',
      controller: 'RegistrationController as vm'
    });
  }
})();
