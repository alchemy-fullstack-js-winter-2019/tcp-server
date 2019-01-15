const { createServer } = require('net');
const ChatRoom = require('./chatroom');

const chatRoom = new ChatRoom;

const server = createServer(client => {
  // we need to add the client to our chatRoom

  client.on('data', data => {
    // parseMessage

    // if/elseif/else

    // dm look up client based on username (found in arg key)
    //  -> send that client a message (found in text key)
    // all use chatROom.all to get a list of all clients
    //  -> send each client a message (found in text key) filter out the client sending data
    // nick -> chatRoom.rename with the newName (found in arg key)

    chatRoom.all().forEach();
  });

  // when a client disconnects remove them from chatROom
  
});




server.listen(7890, 'server has been created');

module.exports = server;
