const { createServer } = require('net');
const Chatroom = require('./chatroom');
const chatroom = new Chatroom();

const server = createServer(client => {
  console.log('client connected');
  //we need to add the client to our chatroom
  chatroom.add(client);

  client.on('data', data => {
    console.log(`CLIENT: ${data}`);
    // parseMessage
    // if/elseif/else or switch on the parseMessage command
    // -dm look up client based on username, found in arg key
    // -all use chatroom.all to get a list of all clients // filter out the client sending the data
    // -- send each client a message (forEach)
    // -nick call rename with newName found in argkey
  });

  client.on('end', () => {
    console.log('client disconnected');
    // when a client disconnects, remove them from chat
  });

});

module.exports = server;
