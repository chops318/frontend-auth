'use strict';

module.exports = (app) => {
  app.component('signIn', {
    controller: 'AuthController',
    template: require('./signin-template.html'),
    bindings: {
      baseUrl: '<'
    }
  });
};
