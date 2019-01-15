const { createConnection } = require('net');
const { createInterface } = require ('readline');

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '>'
});

const client = createConnection(7890, () => {
  console.log('connected to server!');
  rl.prompt();

  rl.on('line', input  => {
    client.write(input);
    rl.prompt();
  });

});

client.on('data', data => {
  rl.write(data);
});

client.pipe(process.stdout);

