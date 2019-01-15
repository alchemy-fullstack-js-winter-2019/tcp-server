/*eslint-disable no-console*/

const { createConnection } = require('net'); // Destructure createConnection from net
const { createInterface } = require('readline');

const rl = createInterface({
  input: process.stdin, //standard in
  output: process.stdout, //standard out
  prompt: '>'
});

const client = createConnection(7890, () => {
  rl.prompt();

  rl.on('line', input => {
    rl.prompt();
    client.write(input);
  });
});

client.on('data', data => {
  rl.write(`${data}/n`);
});
