const net = require('net');

const server = net.createServer((client) => {
  console.log('client connected');
  client.on('end', () => {
    console.log('client disconnected');
  });
});

server.on('error', (err) => {
  throw err;
});

server.listen(7890, () => {
  console.log('server listening on 7890');
});

