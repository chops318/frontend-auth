'use strict';

module.exports = (app) => {
  require('./list-form')(app);
  require('./list')(app);
}
