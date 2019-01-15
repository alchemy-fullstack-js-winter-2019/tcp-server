const net = require('net');
const clients = require('./chatRoom');
const chatRoom = new ChatRoom;

let clientName = clients.username;

const server = net.createServer(client => {
  console.log('Client Connected');
  client.on('data', data => {
    client.setEncoding('utf8');
    // we need to add client to chatroom
    console.log(`${clientName}: ${data}`);
    client.write(`ECHO: ${clientName} ${data}`);
    parseMessage(data);
    if(cmd = dm) {
      clients.username (arg);
    } elseif(cmd = all) {
      all clients message;
      // filter out person who sent the data
    } else {
      nick chatRoom.rename with newName (arg)
    }
  });

  // when client disconnects remove
});

module.exports = server;

