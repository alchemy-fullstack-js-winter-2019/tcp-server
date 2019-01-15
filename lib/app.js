const net = require('net');
const ChatRoom = require('./ChatRoom');
const parseMessage = require('./parseMessage');

const clients = new ChatRoom();

const app = net.createServer((client) => {
  client.setEncoding('utf8');
  clients.add(client);  
  console.log('CLIENT CONNECTED');
  
  client.on('end', () => {
    console.log(`${client.username} disconnected`);
  });

  client.on('err', (err) => {
    console.log(err);
  });

  client.on('data', data => {
    console.log(`CLIENT: ${data}`);
    const { command, arg, text } = parseMessage(data);

    if(command === 'dm') {
      const client = clients.getClient(arg);
      client.write(`${client.username}: ${text}`);
    }

    if(command === 'all') {
      clients.getBroadcastList().forEach(client => {
        client.write(`${client.username}: ${text}`);
      });
    }

    if(command === 'nick') {
      clients.rename(client.username, arg);
      client.write(`You renamed your username to be ${client.username}`);
    } 

    else {
      clients.getBroadcastList().forEach(client => {
        client.write(`${client.username}: ${text}`);
      });
    }
  });
});

module.exports = app;
