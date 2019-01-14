
##Create a TCP server

//read network to find create server docs in node

const { createServer } = require ('net');

const server = createServer(client => { //everytime a new clients connect I print the message below
  consoel.log('client connected');

});
server.listen(7890, () => console.log('Listening on 7890));


const server = createServer(() => {
  console.log('Client connnected');
  c.on('end', () => {
    console.log('client disconnected');
  });
  
})
server.listen