const { socket } = require('../../config/socket');

function emitUpdateUser(user) {
  socket.io.emit('user:update', user);
}

module.exports = {
  emitUpdateUser,
}
