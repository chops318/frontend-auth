'use strict';

module.exports = (app) => {
  require('./signin')(app);
  require('./signup')(app);
  require('./list-form')(app);
  require('./list')(app);
}
