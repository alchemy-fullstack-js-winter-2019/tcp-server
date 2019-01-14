const { createServer } = require('net');


const server = createServer((client) => {
  console.log('CLIENT CONNECTED');
  client.on('data', data => {
    console.log(`CLIENT: ${data}`);
  });
});

server.listen(7890, () => {
  console.log('Server listening on port 7890');
});
