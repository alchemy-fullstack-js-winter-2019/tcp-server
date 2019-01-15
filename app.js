const { createServer } = require('net');
const ChatRoom = require('./ChatRoom');

const server = createServer(client => {
  client.on('data', data => {
    // parseMessage
    // if/elseif/else or switch on parseMessage command
    // dm look up client based on username (found in arg key)
    // -> send that client the message (found in text key)
    // all use chatRoom.all to get a list of all clients
    // -> send each client the message (found in text key) filter out the client sending data
    // nick -> chatRoom.rename with the newName (found in arg key)
  });
  // when a client disconnects remove them from chatRoom
});

module.exports = server;
