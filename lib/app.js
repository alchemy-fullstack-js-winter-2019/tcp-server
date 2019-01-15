/* eslint-disable no-console */
const net = require('net');
const ChatRoom = require('./ChatRoom');
const parseMessage = require('./parseMessage');

const clients = new ChatRoom();

const app = net.createServer((client) => {
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

    if(command === 'nick') {
      clients.rename(client.username, arg);
      client.write(`You renamed your username to be ${client.username}`);
    } 
  });
});

module.exports = app;
