const ChatRoom = require('.lib/chatRoom');
const { createServer } = require('net');
//create primary tcp server here. it needs to:
// **Create a ChatRoom instance to manage chat users
// **Call net.createServer to create the server and listen for events
// **Subscribe to client socket events
// **(Remember to call client.setEncoding('utf8'); to work with just text)

const chatRoom = new ChatRoom();

createServer(7890, client => {
  //add the client to char room (see example from class)
  // client.on(data, () => {
  //   //parse message (get the command)
  //   //if or else if or else or switch block, on the parseMessage command
  //   //if DM, look up client based on username found in arg: key - lookup
  //   //send that client a message
  //   //if @all, use chatRoom.all to get list of all clients & send each client the msg(found in text key) filter out the client who sent it (eg .filter)
  //  
  //   //if @nick, chatRoom.rename with the newName (found in arg: key)
  //   client.setEncoding('utf8');
  // });
  //when a client disconnects, remove them from chat room
  console.log(chatRoom, client);
});

module.exports = createServer;
