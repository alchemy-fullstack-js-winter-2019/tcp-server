const net = require('net');
const clients = require('./chatRoom');
const chatRoom = new ChatRoom;

let clientName = clients.username;

const server = net.createServer(client => {
  console.log('Client Connected');
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

  // when client disconnects remove
});

module.exports = server;

