const { createServer } = require('net');

const server = constServer(client => {
  console.log('CLIENT CONNECTED');
});

server.listen(7890, () => console.log('LISTENING ON 7890'));

