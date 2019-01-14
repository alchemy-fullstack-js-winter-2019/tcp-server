const { createServer } = require('net');

const server = createServer(client => {
  client.on('data', data => console.log(`client: ${data}`));
  
  console.log('client connected');
});

server.listen(7890, () => {
  console.log('server listening on 7890');

});



