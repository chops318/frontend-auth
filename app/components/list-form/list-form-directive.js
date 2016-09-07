'use strict';

module.exports = (app) => {
  app.directive('esListForm', function() {
    return {
      controller: 'ListFormController',
      controllerAs: 'ctrl',
      template: require('./list-form-template.html'),
      scope: {
        buttonText: '@',
        save: '&',
        list: '='
      }
    };
  });
};
