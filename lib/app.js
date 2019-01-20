/* eslint-disable no-console */
const { createServer } = require('net');
const ChatRoom = require('./ChatRoom');
const parseMessage = require('./parseMessage');

const chatroom = new ChatRoom();

module.exports = createServer(client => {
  client.setEncoding('utf8');

  chatroom.add(client);

  console.log(`
    user ${client.username} connected, 
    ${chatroom.clients.size} user(s) total.
  `);

  client.on('error', err => {
    console.log(err);
  });

  client.on('data', data => {
    const message = parseMessage(data);

    if(!message) return;

    else if(message.command === 'all') {
      chatroom
        .broadcast(client)
        .forEach(c => c.write(`user ${client.username}: ${message.text}`));
    } else if(message.command === 'dm') {
      chatroom
        .getClient(message.arg)
        .write(`(@DM) user ${client.username}: ${message.text}`);
    }
    else if(message.command === 'nick') {
      client.write(`Your new username is: ${message.arg}`);
      chatroom
        .broadcast(client)
        .forEach(c => c.write(`user ${client.username} is now user ${message.arg}`));
      chatroom.rename(client.username, message.arg);
    } else {
      client.write(message.text);
    }
  });

  client.on('end', () => {
    console.log(`
      user ${client.username} disconnected, 
      ${chatroom.clients.size - 1} user(s) left.
    `);
    chatroom.remove(client);
    chatroom
      .broadcast(client)
      .forEach(c => c.write(`user ${client.username} logged out`));
  });

});
