const { createServer } = require('net');
const ChatRoom = require('./chat-room');

const app = createServer(client => {
  client.write('sup');
  const room = new ChatRoom();
  const username = room.add().username;

  console.log('CLIENT CONNECTED');
  client.username = username;
  client.on('data', data => {
    console.log(`CLIENT: ${data}`);

  });
});

module.exports = app;
