const { createServer } = require('net');


const server = createServer(client => {
  //client is a stream that has .readstrea, .writestream//client is a duplex stream
  console.log('client connected'); 
    client.on('data', data => {
      console.log(`Client: ${data}`)

  });
});


server.listen(7890, () => console.log('listening on 7890'));

//stream are all even emitters, because sockets are streams and data are stream emitters
//server and client are a read and write stream