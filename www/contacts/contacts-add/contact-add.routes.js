(function() {
  'use strict';

  angular
    .module('app.contacts.add')
    .config(routes);

  routes.$inject = ['$stateProvider'];

  function routes($stateProvider) {
    $stateProvider.state('tab.contacts.add', {
      url: '/add',
      templateUrl: 'contacts/contacts-add/contacts-add.html',
      controller: 'ContactsAddController as vm'
    });
  }
})();
