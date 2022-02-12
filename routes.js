const user = require('./api/user');
const authLocal = require('./auth/local');
const upload = require('./api/upload');

function routes(app) {
  app.use('/api/users', user);
  app.use('/api/uploads', upload);

  // auth routes
  app.use('/auth/local', authLocal);
}

module.exports = routes;
