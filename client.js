/* eslint-disable no-console */
const { createConnection } = require('net');
const { createInterface } = require('readline');

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

const client = createConnection({ port: 6001 }, () => {
  console.log(`
    🍕  Welcome to the ChatRoom! 🍕

    Available commands:
      @all (message)
      @dm:username (message)
      @nick:newusername
  `);

  rl.prompt();
  rl.on('line', line => {
    rl.prompt();
    client.write(line);
  });
  client.on('data', data => {
    rl.write(`${data}\n`);
  });
});
