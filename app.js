const express = require('express');
const http = require('http');

const expressConfig = require('./config/express');
const connectDB = require('./config/database');
const { connect: connectSocket, socket } = require('./config/socket')
const routes = require('./routes');
const { log } = require('./utils/logger')

const app = express();
const server = http.Server(app);

expressConfig(app);
connectSocket(server);

const PORT = process.env.PORT;

// Start server
server.listen(PORT, () => {
  // connect to database
  connectDB();

  // Routes
  routes(app);

  socket.io.on('connection', (socket) => {
    log.info(`Socket Connected: ${socket.id}`);

    socket.on('disconnect', () => {
      log.info(`Socket Disconnect: ${socket.id}`);
    })
  })

  log.info(`Server running at http://localhost:${PORT}/`);
});

module.exports = app;
