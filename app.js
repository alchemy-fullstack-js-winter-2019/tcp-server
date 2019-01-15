const ChatRoom = require('./lib/chatRoom');
// const net = require('net');
const parseMessage = require('./lib/parseMessage');
const clients = new ChatRoom(); 
const { createServer } = require('net');

const server = createServer(client => {
  console.log('client connected'));
  client.setEncoding('utf8');
  clients.add(client);
  client.on('data', data => {
    const message = `${client.username}: ${parseMessage(data)}`;
    clients
      .getAll(client);
  });
  client.on('end', () => {
    clients.remove(client);
  })

module.exports = server;
