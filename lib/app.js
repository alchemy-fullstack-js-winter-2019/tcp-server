/* eslint-disable no-console */

const net = require('net');
const ChatRoom = require('./chatroom');

const clients = new ChatRoom;

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
  
});

app.listen(7890, 'server has been created');

module.exports = app;
