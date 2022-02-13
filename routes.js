const user = require('./api/user');
const authLocal = require('./auth/local');
const upload = require('./api/upload');
const tag = require('./api/tag');
const question = require('./api/question');

function routes(app) {
  app.use('/api/users', user);
  app.use('/api/uploads', upload);
  app.use('/api/tags', tag);
  app.use('/api/questions', question);

  // auth routes
  app.use('/auth/local', authLocal);
}

module.exports = routes;
