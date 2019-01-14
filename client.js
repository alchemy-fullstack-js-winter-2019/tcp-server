const { createConnection } = require('net');
const { createInterface } = require ('readline');

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '>'
});

const client = createConnection({ port: 7890 }, () => {
  console.log('connected to server!');
  client.write('world!\r\n');

  rl.on('line', (line) => {
    console.log(`Received: ${line}`);
  });

});

// use rl to print data from server to console

rl.on('print', (print) => {
  console.log(`Received: ${print}`);
});

client.write('hi there!!');

client.pipe(process.stdout);


client.on('data', (data) => {
  console.log(`CLIENT: ${data}`);
  client.end();
});

client.on('end', () => {
  console.log('disconnected from server');
});


