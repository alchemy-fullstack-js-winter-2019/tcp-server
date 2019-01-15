const { createServer } = require('net');
const ChatRoom = require('./ChatRoom');

const chatRoom = new ChatRoom();

const server = createServer(client => {
  client.on('data', data => {
    // parseMessage
    // if/elseif/else or switch on the parseMessage command
    // dm look up client based on username (found in arg key)
    // -> send that client a message (found in text key)
    // all use chatRoom.all to get a list of all clients
    // -> send each client a message (found in text key)
    // nick -> chatRoom.rename with the newName (found in arg key)

  });

  // when a client disconnects remove them from chatRoom
});

module.exports = server;
