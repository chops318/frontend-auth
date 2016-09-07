'use strict';

module.exports = (app) => {
  app.directive('esList', function() {
    return {
      controller: 'ListController',
      controllerAs: 'listCtrl',
      template: require('./list-template.html'),
      bindToController: true,
      scope: {
        baseUrl: '@',
        config: '='
      }
    }
  });
};
