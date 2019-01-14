const { createServer } = require('net');

const server = createServer(client => {
  console.log('client connected');
});

server.listen(7890, () => console.log('server connected on 7890'));
