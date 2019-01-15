const ChatRoom = require('./chatRoom');
// const net = require('net');
const parseMessage = require('./parseMessage');
const clients = new ChatRoom(); 
const { createServer } = require('net');

const server = createServer(client => {
  /* eslint-disable-next-line */
  console.log('client connected');
  client.setEncoding('utf8');
  clients.add(client);
  client.on('data', data => {
    /* eslint-disable-next-line */
    const message = `${client.username}: ${parseMessage(data)}`;
    clients
      .getAll(client);
  });
  client.on('end', () => {
    clients.remove(client);
  });

});
module.exports = server ;
