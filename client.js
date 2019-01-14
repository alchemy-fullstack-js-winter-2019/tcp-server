const net = require('net');
const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});



const client = net.createConnection(7890, () => {
  console.log('connected to server');
  rl.prompt();

  rl.on('line', line => {
    rl.prompt();
    client.write(line);
  });

  rl.on('data', data => {
    rl.write(data);
  });
});

