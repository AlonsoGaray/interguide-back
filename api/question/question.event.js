const { socket } = require('../../config/socket');

function emitQuestion(question) {
  socket.io.emit('question:create', question);
}

module.exports = {
  emitQuestion
}
