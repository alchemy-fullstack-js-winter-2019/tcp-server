// const http = require('http');
const { createConnection } = require('net'); 
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

const client = createConnection(7890, () => {
  rl.on('line', (line) => {
    rl.prompt();
    client.write(line);
  });
});

client.on('data', data => {
  rl.write(data);
});
