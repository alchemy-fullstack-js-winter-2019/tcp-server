// create a TCP client
const { createConnection } = require ('net');
const { createInterface } = require('readline');

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '>'
});

const client = createConnection({ port:7890 }, () => {
  rl.prompt();
  console.log('Connected To Server');
  // listen to line events and write data to server
  rl.on('line', (line) => {
    rl.prompt();
    // write data to server
    client.write(line);
    
  });
});

// use rl to print data from server to console
client.on('data', data => {
  rl.write(`${data}\n`);
});

// client.write ('Hi there');
// client.pipe(process.stdout);
