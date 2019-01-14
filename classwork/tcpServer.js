const { createServer } = require('net');

const server = createServer(client => {
  console.log('client connected');
  client.on('data', data => {
    console.log(`CLIENT: ${data}`);
  });

  client.on('end', () => {
    console.log('client disconnected');
  });

});

server.listen(7890, () => console.log('server connected on 7890'));
