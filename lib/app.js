const { createServer } = require('net');
const ChatRoom = require('./chat-room');

const room = new ChatRoom();

const app = createServer(client => {
  let username = room.add(client).username;

  console.log('CLIENT CONNECTED');
  client.on('data', data => {
    const parsed = room.parseMessage(data.toString());

    if(parsed.command === 'all') {
      room.all().forEach(cli => cli.write(`${username}: ${parsed.text}`));
    } 
    else if(parsed.command === 'nick') {
      username = room.rename(username, parsed.arg).username || username;
    }
    else if(parsed.command === 'dm') {
      room.getClient(parsed.arg).write(`${username}: ${parsed.text}`);
    }
  });

  client.on('end', () => {
    room.all()
      .forEach(cli => cli.writable ? cli.write(`${username} has logged out`) : null);
  });
});

module.exports = app;
