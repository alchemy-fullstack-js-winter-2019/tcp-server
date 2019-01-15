const net = require('net');
const clients = require('./chatRoom');
const parseMessage = require('./parseMessage');
const chatRoom = new ChatRoom;

const server = net.createServer(client => {
  console.log('Client Connected');
  clients.add(client);  
  client.on('data', data => {
    client.setEncoding('utf8');
    const { cmd, arg, text } = parseMessage(data);
    if(cmd === 'dm') {
      const client = clients.getClient(arg);
      client.write(`${client.username}: ${text}`);
    } else if(cmd === 'all') {
      clients.all.filter(x => x !== client).forEach(client => {
        client.write(`${client.username}: ${text}`);
      });
    } else {
      nick chatRoom.rename with newName (arg)
    }
  });

  client.on('end', () => {
    console.log(`${client.username} has disconnected`);
  });

  // when client disconnects remove
});

module.exports = server;

