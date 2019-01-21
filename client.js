const { createConnection } = require('net');
const { createInterface } = require('readline');

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '>'
});

const client = createConnection(7890, () => { 
  rl.prompt();
  // console.log('connected to server!');
  rl.on('line', line => { //listen to readline interface
    client.write(line);
    rl.prompt();
  });
});

client.setEncoding('utf8');

client.on('data', data => { 
  rl.write(data); 
});


