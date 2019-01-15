const { createConnection } = require('net');
const { createInterface } = require('readline');

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

const client = createConnection({ port: 6001 }, () => {
  console.log('connected to server...');
  rl.prompt();
  rl.on('line', line => {
    rl.prompt();
    client.write(line);
  });
  client.on('data', data => {
    rl.write(data);
  });
});


// client.on('error', err => console.log(err));
// client.write('HIIII');
// client.pipe(process.stdout); 


