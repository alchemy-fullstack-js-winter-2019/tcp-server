const { createConnection } = require('net');

const client = createConnection({ port: 7890 }, () => {
  // 'connect' listener
  console.log('connected to server...');
  client.pipe(process.stdout); 
});
client.on('error', err => console.log(err));
