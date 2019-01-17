
const readline = require('readline');
const { createConnection } = require('net'); 

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

const client = createConnection(7890, () => {
  rl.prompt();
  rl.on('line', (line) => {
    rl.prompt('whats up');
    client.write(line);
    rl.prompt();
  });
  client.setEncoding('utf8');
  client.on('data', data => {
    rl.write(`${data}\n`);
  });
});
