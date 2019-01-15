const net = require('net');
const readline = require('readline');


//DUPLEX STREAM- having a client and a SERVER that are both read and write streams
//creating serve
//duplex stream are both read and write streams from the client.
const server = net.createServer(client => {
  console.log('client connected');
  //we wwant to read from this client
  //client is a stream which we can use the "on" method 
  //ADD A LISTENER TO DATA EVENT ON EACH CLIENT
  client.on('data', data => {
    console.log(`client ${data}`);
    
  });
});


server.listen(7890, () => console.log('Listening on 7890'));


const client = net.createConnection({ port: 7890 }, () => {
  readline.prompt();
  // 'connect' listener
  console.log('created Connection!');
  //listen to line events and write data to server
  rl.on('line', input => {
    client.write(input);
  });
});

//use rl to print data from server to console. 
client.on('data', data => {
  rl.write(data);
});





//all data that comes from the server goes here
client.pipe(process.stdout);

//READLINE API- create a readLine interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});





