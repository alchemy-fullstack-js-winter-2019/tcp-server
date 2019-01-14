// desctructure createServer from net using {}
const { createServer } = require('net');

// Create server and input client
const server = createServer(client => {
  console.log('Client Connected');

  client.on('data', data => {
    console.log(`Client: '${data}'`);
    //client is a stream
  });
});

// Specify which server port is listening and log
server.listen(7890, () => console.log('listening on 7890'));
