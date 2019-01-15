const { createServer } = require('./lib/app');

const server = createServer(client => {
  console.log('CLIENT CONNECTED');
});

server.listen(7890, () => console.log('listening on 7890'));
