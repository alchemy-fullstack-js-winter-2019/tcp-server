const { createServer } = require('net');

let clients = [];

const server = createServer(client => {
  console.log(`CLIENT CONNECTED: ${client}`);
  clients.push(client);
  client.on('data', data => {
    console.log(`CLIENT: ${data}`);
    clients[0].write(`${data} back!`);
  });
});

server.listen(7890, () => console.log('LISTENING ON 7890'));
