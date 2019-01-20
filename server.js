const { createServer } = require('net');

const server = createServer(client => {
  /* eslint-disable-next-line */
  console.log('CLIENT CONNECTED');
  client.on('data', data => {
    /* eslint-disable-next-line */
    console.log(`CLIENT: ${data}`);
  });

});

/* eslint-disable-next-line */
server.listen(7890, () => console.log('LISTENING ON 7890'));