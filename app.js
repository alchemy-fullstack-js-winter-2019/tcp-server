const ChatRoom = require('./ChatRoom');
const chatRoom = new chatRoom();
const { createSever } = require('net');

const server = createServer(client => {
  // we need to add the client to our chatRoom
  client.on('data', data => {
    // parseMessage
    // if/elseif/else or switch on the parseMessage command
    // dm look up client based on username (found in arg key)
    // -> send that client the message (found in text key)
    // all use chatRoom.all to get a list of all clients
    // -> send each client a message (found in text key) filter out the client sending data
    // nick -> chatRoom.rename with the newName(found in arg key)
  });

  // when a client disconnects remove them from chatRoom
});
// createServer(7890, client => {
//   client.on('data', data => )
// });

module.exports = server;