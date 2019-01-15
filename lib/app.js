const { createServer } = require('net');
const ChatRoom = require('./ChatRoom');
const parseMessage = require('./parseMessage');

const chatRoom = new ChatRoom();

const server = createServer(client => {
  // we need to add the client to our chatRoom
  chatRoom.add(client);

  client.on('data', data => {
    //parseMsg
    const userObj = parseMessage(data);
    // if/else if/else or switch on the parseMessage command
    if(userObj.command === 'dm') {
      const sendToClient = chatRoom.getClient(userObj.arg);
      // dm look up client based on username (found in arg key)
      // -> send that client a message (txt key)
    } else if(userObj.command === '@all') {
      // all use chatRoom.all to get a list of all clients
      const sendToAllUsers = chatRoom.all();
      // -> send each client a message (txt key) filter out the client sending data 
    } else if(userObj.command === 'nick') {
      // nick -> chatRoom.rename() with the newName (found in arg key)
      chatRoom.rename(oldUsername, userObj.text)
    }
  });
  chatRoom.delete(user);
  // when a client disconnects remove them from chatRoom
});

module.exports = server;
