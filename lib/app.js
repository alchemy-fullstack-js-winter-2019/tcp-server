
const net = require('net');
const ChatRoom = require('./ChatRoom');
const parseMessage = require('./parseMessage');

const clients = new ChatRoom();

const app = net.createServer((client) => {
  client.on('data', data => {
    client.setEncoding('utf8');
    clients.add(client);
    console.log('CLIENT CONNECTED');

    client.on('error', (error) => {
      console.log(error);
    });

    client.on('data', data => {
      console.log(`CLIENT: ${data}`);
      const { command, arg, text } = parseMessage(data);

      if(command === 'dm') {
        const client = clients.getClient(arg);
        client.write(`${client.username}: ${text}`);
      }
      if(command === 'all') {
        clients.getBroadcastList(client).forEach(client => {
          client.write(`${client.username}: ${text}`);
        });
      }
      if(command === 'sn') {
        clients.rename(client.username, arg);
        client.write(`You've renamed to ${client.username}`);
      }
      else {
        client.write('command not found');
      }
    });
  });
});

module.exports = app;
