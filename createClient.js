const { createConnection } = require('net');
const { createInterface } = require('readline');

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

const client = createConnection({ port: 7890 }, () => {
  console.log('connected to server...');
  rl.on('line', line => {
    client.write(line, err => err ? err : line);
  });
});

client.on('data', data => {
  rl.write(`${data}\n`);
});

// client.on('error', err => console.log(err));
// client.write('HIIII');
// client.pipe(process.stdout); 


