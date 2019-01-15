const net = require('net');
// const readline = require('readline');

const server = net.createServer(client => {
  console.log('client connected');
  client.on('data', data => {
    console.log(`client${data}`);
  });
});

server.listen(3000, () => {
  console.log('server listening on 3000');
});
 


