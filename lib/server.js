const { createServer } = require('net');


const server = createServer(client => {
  //client is a stream that has .readstrea, .writestream//client is a duplex stream
  // eslint-disable-next-line no-console
  console.log('client connected'); 
  client.on('data', data => {
    // eslint-disable-next-line no-console
    console.log(`Client: ${data}`); 

  });
});


// eslint-disable-next-line no-console
server.listen(7890, () => console.log('listening on 7890'));


