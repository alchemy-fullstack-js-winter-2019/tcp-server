const { createServer } = require('net');

let clients = [];

createServer(client => {
  console.log(`CLIENT CONNECTED: ${client}`);
  clients.push(client);
  client.on('data', data => {
    console.log(`CLIENT: ${data}`);
    clients[0].write(`${data} back!`);
  });
});
