const { createServer } = require('net');
const ChatRoom = require('./ChatRoom');

const chatRoom = new ChatRoom;

const server = createServer(client => {
  //we need to add the client to our chatRoom
  console.log('client connected');
  //parse message
  //if/elseif/else or switch on the parseMessage command
  //dm look up client based on user name { foudn in arg key}
  //     send client a message (found in text key)
  // all use chatRoom.all to get a list of all clients
  chatRoom.all();
  //    send all clients a message - filter out the client sending data
  //nick -> chjatROom.rename with the new name (found in arg key);
  client.on('data', data => console.log(`client: ${data}`));

  //when a client disconnects remove them from chatRoom 
  
  client.on('end', () => console.log('client disconnected'));

  client.setEncoding('utf8');
});

module.exports = server;
