const user = require('./api/user');
const authLocal = require('./auth/local');

function routes(app) {
  app.use('/api/users', user);

  // auth routes
  app.use('/auth/local', authLocal);
}

module.exports = routes;
