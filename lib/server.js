const net = require('net');
// create a server using the createServer function from node

// pass createServer the callback 'connection' which gets fired everytime someone connects to the server
const server = net.createServer((connection) => {
    // console logs tha a user has connected
    console.log('user connected');

    // listens for the 'end' event AKA a user disconnecting from the server
    connection.on('end', () => console.log('user has disconnected'));

    // listens for the 'data' event and listens for client data
    // console logs the string using template string
    // THIS AND .PIPE() ARE CASUING THE DUPLICATE MESSAGES
    connection.on('data', data => {
        connection.write(`FROM SERVER: ${data}`);
    });

    // writes 'hello user; when a user connects to the server
    // connection.write('hello users');

    // 'pipes' or directs any network notifications to the terminal 
    // aka anything that happens on the server prints in the server
    connection.pipe(process.stdout);
});





// defines what localhost port to run the server on 3000 in this example
server.listen(3000, () => {
    console.log('server started on port 3000');
});



