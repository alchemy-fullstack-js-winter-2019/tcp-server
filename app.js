const ChatRoom = require('./lib/chatRoom');
const net = require('net');
const parseMessage = require('./lib/parseMessage');
const clients = new ChatRoom(); 

const app = createServer(client => {
  console.log('client connected');
  chatRoom.push(client);
  client.on('data', data => {
    console.log(`${data}`);
    client.setEncoding('utf8');
  });
});

module.exports = app;
