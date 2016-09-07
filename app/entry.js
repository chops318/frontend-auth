'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
let noteApp = angular.module('noteApp', [require('angular-route')]);

require('./controller')(noteApp);
require('./components')(noteApp);

noteApp.run(['$rootScope', ($rs) => {
  $rs.baseUrl = `${__API_URL__}`;
  $rs.noteListUrl = $rs.baseUrl + '/api/list';
  $rs.noteHttpConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Accept-Content': 'application/json'
    }
  };
}]);

noteApp.config(['$routeProvider', function($rp){
  $rp
    .when('/', {
      template: require('./html/notes.html')
    })
    .when('/signup', {
      template: require('./html/signup.html')
    })
    .otherwise({
      redirectTo: '/'
    })
}]);
