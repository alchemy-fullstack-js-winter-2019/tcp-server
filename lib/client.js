const { createConnection } = require('net'); // Destructure createConnection from net
const { createInterface } = require('readline');

// Use readline to createInterface
const rl = createInterface({
  input: process.stdin, //standard in
  output: process.stdout, //standard out
  prompt: '>'
});

// createConnection to 7890 and log a msg
const client = createConnection(7890, () => {
  rl.prompt();

  // Listening for when enter has been pressed 
  // Then creates a new prompt and writes the line to the server
  rl.on('line', input => {
    rl.prompt();
    client.write(input);
    // Implement prompt method (specified above) to create new line prompt
  });
});

// Listening for when data is coming from server
client.on('data', data => {
  rl.write(`${data}/n`);
});
