const { createConnection } = require('net');
const { createInterface } = require('readline');
 
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

const client = createConnection(4562, () => {
  console.log('CONNECTED TO SERVER');
  rl.prompt();
  rl.on('line', input => {
    client.write(input);
    rl.prompt();
  });
});

client.on('data', data => {
  rl.write(data);
});

client.pipe(process.stdout);


