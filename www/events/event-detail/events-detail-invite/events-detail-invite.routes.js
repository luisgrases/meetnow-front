(function() {
  'use strict';

  angular
    .module('app.events.detail.invite')
    .config(routes);

  routes.$inject = ['$stateProvider'];

  function routes($stateProvider) {
    $stateProvider.state('tab.events.extrainvite', {
      url: '/:eventId/extrainvite',
      templateUrl: 'events/event-detail/events-detail-invite/events-detail-invite.html',
      controller: 'EventsDetailInviteController as vm'
    });
  }
})();
