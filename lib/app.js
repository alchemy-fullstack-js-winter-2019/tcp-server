const { createServer } = require('net');
const ChatRoom = require('./ChatRoom');
const parseMessage = require('./parseMessage');

const server = createServer(client => {
  const chatroom = new ChatRoom();
  client.setEncoding('utf8');
  // add client to chatroom
  chatroom.add(client);
  console.log(`user${client.username} connected`);

  client.on('error', err => {
    console.log(err);
  });

  client.on('data', data => {
    // parseMessage
    const message = parseMessage(data);
    if(!message) return;
    if(message.command === 'all') {
      chatroom
        .broadcast(client)
        .forEach(c => c.write(`
          ${client.username}: ${message.text}
        `));
    } else if(message.command === 'nick') {
      chatroom.rename(client.username, message.arg);
    } else if(message.command === 'dm') {
      chatroom.getClient(message.arg).write(`
        (DM) ${client.username}: ${message.text}
      `);
    }
  });
  // when client disconnects remove them from chatroom
  client.on('end', () => {
    console.log(`${client.username} disconnected`);
    // client.destroy();
  });

});

module.exports = server;
