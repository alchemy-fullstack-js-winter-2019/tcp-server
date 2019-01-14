const net = require('net');
const readline = require('readline');





// creates a readline interface which allows for typing messages in the terminal
const rl = readline.createInterface({
    // stdin/stdout listens for the in/out flow of data or 'lines'
    input: process.stdin, 
    output: process.stdout, 
    prompt: '> '
});

// creates a new client instance and connects to port 3000
const client = net.createConnection({ port: 3000 }, () => {
    // adds a new promt token when you connect
    rl.prompt();
    
    // console logs that to the user that the user has connected
    console.log('connected to port 3000');
    
    //listens for line event and write data to server
    rl.on('line', data => {
        // new prompt token after every line
        rl.prompt();
        client.write(data);
    });

}); 

client.on('data', data => {
    rl.write(data);
});


