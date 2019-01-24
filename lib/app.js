const { createServer } = require('net');
const Chatroom = require('./chatroom');
const chatroom = new Chatroom();

const server = createServer(client => {
  // eslint-disable-next-line
  console.log('client connected');
  chatroom.add(client);

  client.on('data', data => {
    // eslint-disable-next-line
    console.log(`CLIENT: ${data}`);
  
  });

  client.on('end', () => {
    // eslint-disable-next-line
    console.log('client disconnected');
  });

});

module.exports = server;
