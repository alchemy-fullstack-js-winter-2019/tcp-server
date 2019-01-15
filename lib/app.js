const net = require('net');
const ChatRoom = require('ChatRoom');

const clients = new ChatRoom();

module.exports = net.createServer((client) => {
  client.setEncoding('utf8');
  clients.add(client);  
  console.log('CLIENT CONNECTED');
  
  client.on('data', data => {
    console.log(`CLIENT: ${data}`);
    clients.all().forEach(() => {
      clients.write();
    });
  });

  client.on('end', () => {
    console.log(`${client.username} disconnected`);
  });

  client.on('err', (err) => {
    console.log(err);
  });
});


