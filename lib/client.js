const { createConnection } = require('net');
const { createInterface } = require('readline');

const rl = createInterface({
  input: process.stin,
  output: process.stout,
  prompt: '> '
});

const client = createConnection(7890, () => {
  console.log('CONNECTED TO SERVER');
});

rl.on('line', line => {
  rl.prompt();
  client.write(line);
});

client.on('data', data => {
  rl.write(data);
});
