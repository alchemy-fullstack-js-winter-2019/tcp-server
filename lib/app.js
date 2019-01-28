const net = require('net');
const ChatRoom = require('./chatRoom');
const parseMessage = require('./parseMessage');
const clients = new ChatRoom();

const server = net.createServer(client => {
  console.log('Client Connected');
  clients.add(client);  
  
  client.on('data', data => {
    const { cmd, arg, text } = parseMessage(data);
    client.setEncoding('utf8');
    if(cmd === 'dm') {
      const client = clients.getClient(arg);
      client.write(`${client.username}: ${text}`);
    } else if(cmd === 'all') {
      clients.all.filter(x => x !== client).forEach(client => {
        client.write(`${client.username}: ${text}`);
      });
    } else if(cmd === 'nick') {
      clients.rename(client.username, arg);
      client.write(`You are now known as: ${client.username}`);
    }
  });

  client.on('end', () => {
    console.log(`${client.username} has disconnected`);
  });
});

module.exports = server;

