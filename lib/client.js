const net = require('net');
const { createInterface } = require('readline');





// creates a readline interface which allows for typing messages in the terminal
const rl = createInterface({
    // stdin/stdout listens for the in/out flow of data or 'lines'
    input: process.stdin, 
    output: process.stdout, 
    prompt: '> '
});

// creates a new client instance and connects to port 3000
const client = net.createConnection({ port: 3000 }, () => {
    // adds a new prompt token when you connect
    rl.prompt();
    
    // console logs that to the user that the user has connected
    console.log('connected to port 3000');
    
    //listens for line event and write data to server
    rl.on('line', line => {
        // new prompt token after every line
        rl.prompt();
        client.write(`${line}`);
    });
    rl.on('data', data => {
        rl.prompt();
        rl.write(data);
    });

}); 



