'use strict';

module.exports = (app) => {
  app.component('signUp', {
    controller: 'AuthController',
    template: require('./signup-template.html'),
    bindings: {
      baseUrl: '<'
    }
  });
};
