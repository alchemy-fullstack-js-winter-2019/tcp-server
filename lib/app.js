const { createServer } = require('net');
const ChatRoom = require('./chat-room');

const room = new ChatRoom();

const app = createServer(client => {
  const username = room.add(client).username;

  console.log('CLIENT CONNECTED');
  client.username = username;
  client.on('data', data => {
    const parsed = room.parseMessage(data.toString());

    if(parsed.command === 'all') {
      room.all().forEach(cli => cli.write(`${parsed.text}`));
    }
  });
});

module.exports = app;
