const { createServer } = require('net');

// called anytime a client connects to your server
const server = createServer(client => console.log('Client connected', client));

server.on('error', (err) => {
  throw err;
});
server.on('error', err => console.log(err));
server.listen(7890, () => console.log('Server Listening on 7890...'));
