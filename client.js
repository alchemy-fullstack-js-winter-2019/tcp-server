const { createConnection } = require('net');
const { createInterface } = require('readline');

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '>'
});


const client = createConnection(7890, () => { //{port: 7890}
  rl.prompt();
  console.log('connected to server!');
  // stream.pipe(process.stdout);
  //this callback triggered after the connection is established
  //listen to line events and write data to server
  rl.on('line', line => { //listen to readline interface
    //write data to server
    rl.prompt();
    client.write('hi');
    // client.on('data', (data) => {

    // })
    // console.log(`Received: ${input}`);
    // rl.close();
  });
});

//listen to messags from the server
//use readline to print data from server to console
client.on('data', data => { //listen to data coming from the server - client sending to server
  rl.write(data); //writing to whatever output we specify in the interface
});

// client.write('hi there'); //client sending message to server

// client.pipe(process.stdout);


  //read and write duplex strings on both the client and server side 