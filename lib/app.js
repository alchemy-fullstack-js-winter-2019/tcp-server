const { createServer } = require('net');
const ChatRoom = require('../ChatRoom');
const parseMessage = require('./parseMessage');

const ChatRoom = new ChatRoom();

const app = net.createServer((client) => {
  client.setEncoding('utf8');
  clients.add(client);  
  console.log('CLIENT CONNECTED');

const server = createSeerver(client => {
  client.on('data', data => {

  });
});

module.exports = app;

