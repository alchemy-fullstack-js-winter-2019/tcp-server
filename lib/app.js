
const ChatRoom = require('./chatRoom');
const parseMessage = require('./parseMessage');
const { createServer } = require('net');

module.exports = () => {
  const chatRoom = new ChatRoom();
 
  return createServer(client => {
  /* eslint-disable-next-line */
  console.log('client connected');
    client.setEncoding('utf8');
    chatRoom.add(client);

    client.on('end', () => chatRoom.remove(client));
  
    client.on('data', data => {
      const message = parseMessage(data);
      if(!message) return; {
        switch(message.command) {
          case 'all':
            chatRoom
              .broadcast(client)
              .forEach(c => c.write(`${client.username}: ${message.text}`));
            break;
          case 'nick':
            chatRoom.rename(client.username, message.arg);
            break;
          case 'dm':
            chatRoom.getClient(message.arg).write(`(dm) ${client.username}: ${message.text}`);
          // eslint-disable-next-line no-fallthrough
          default:
            client.write('Unknown command');
            break;
        }
      }
    });
  });
};
