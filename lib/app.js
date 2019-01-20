const { createServer } = require('net');
const ChatRoom = require('./ChatRoom');
const parseMessage = require('./parseMessage');

const chatroom = new ChatRoom();

module.exports = createServer(client => {
  client.setEncoding('utf8');

  chatroom.add(client);
  // eslint-disable-next-line no-console
  console.log(`user${client.username} connected`);

  client.on('error', err => {
    console.log(err); // eslint-disable-line no-console
  });

  client.on('data', data => {
    const message = parseMessage(data);

    if(!message) return;

    else if(message.command === 'all') {
      chatroom
        .broadcast(message.text)
        .forEach(c => c.write(`user${client.username}: ${message.text}`));
    } else if(message.command === 'dm') {
      chatroom.getClient(message.arg).write(`(DM) user${client.username}: ${message.text}`);
    }
    else if(message.command === 'nick') {
      // console.log(message);
      // chatroom.broadcast(client); //NOT WORKING
      chatroom.rename(client.username, message.arg);
      client.write(`New username is: ${client.username}`);
    } else {
      client.write(message.text);
    }
  });

  client.on('end', () => {
    // eslint-disable-next-line no-console
    console.log(`user${client.username} disconnected`);
    chatroom.remove(client);
  });

});
