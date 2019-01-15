// const http = require('http');
// const { createConnection } = require('net'); 
const readline = require('readline');
const net = require('net'); 

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

const client = net.connect(7890, () => {

  rl.on('line', (content) => {
    rl.prompt('whats up');
    client.write(content);
  });
  
  client.on('data', data => {
    /* eslint-disable-next-line */
    console.log(data);

  });
  client.on('close', () => {
    /* eslint-disable-next-line */
    console.log('server has ended');
    client.destroy();
  });
});
