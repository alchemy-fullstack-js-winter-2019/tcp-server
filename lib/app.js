const net = require('net');
const ChatRoom = require('ChatRoom');

const chatroom = new ChatRoom();

module.exports = net.createServer((client) => {
  client.setEncoding('utf8');
  chatroom.add(client);  
  
  console.log('CLIENT CONNECTED');
  client.on('data', data => {
    console.log(`CLIENT: ${data}`);
  });
});


