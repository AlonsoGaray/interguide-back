const { socket } = require('../../config/socket');

function emitQuestion(question) {
  socket.io.emit('question:create', question);
}

function emitUpdateQuestion(question) {
  socket.io.emit('question:update', question);
}

module.exports = {
  emitQuestion,
  emitUpdateQuestion
}
