// const http = require('http');

const { createServer } = require('net');

const server = createServer(client => {
  console.log('client connected');
  client.on('data', data => {
    console.log(`${data} \n`);
  });
});


server.listen(7890, () => console.log('Server listening on 7890'));
