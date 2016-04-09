(function() {
  'use strict';

  angular
    .module('inviteAdminGulpAngular')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
