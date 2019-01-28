const { createConnection } = require('net');
const { createInterface } = require('readline');

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

const client = createConnection(7890, () => {
  console.log('connected to server!');
  rl.prompt();

  rl.on('line', line => {
    rl.prompt();
    client.write(line);
  });
});

client.on('data', data => {
  rl.write(data);
  rl.prompt();
});

// client.write('Hello there');

// client.pipe(process.stdout);
