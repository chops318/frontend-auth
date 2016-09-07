'use strict';


module.exports = (app) => {
  app.controller('ListController', ['$log', '$http', function($log, $http) {
    this.lists = [];
    this.getAllLists = function() {
      $log.debug('listCtrl.getAllLists');
      $http.get(this.baseUrl, this.config)
        .then(res => {
          this.lists = res.data;
        }, err => {
          $log.error('error!', err);
        });
    };

    this.deleteList = function(list) {
      $log.debug('listCtrl.deleteList');
      $http.delete(this.baseUrl + '/' + list._id, this.config)
        .then(res => {
          this.lists.splice(this.lists.indexOf(list), 1);
        }, err => {
          $log.error('error!', err);
        })
    };

    this.updateList = function(list) {
      $log.debug('listCtrl.updateList');
      $http.put(this.baseUrl + '/' + list._id, list, this.config)
        .then(res => {
          list.editing = false;
        }, err => {
          $log.error('error!', err);
        });
    };

    this.createList = function(list) {
      $log.debug('listCtrl.createList');
      $http.post(this.baseUrl , list, this.config)
        .then(res => {
          $log.log('success!', res.data);
          this.lists.push(res.data);
        })
        .catch( err => {
          $log.error('error!', err);
        });
    }
  }]);
};
